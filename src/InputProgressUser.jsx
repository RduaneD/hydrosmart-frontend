import React, { useRef, useState } from "react";
import DiagnosisNavbar from "./components/Diagnosis/DiagnosisNavbar";
import DiagnosisFooter from "./components/Diagnosis/DiagnosisFooter";

export default function InputProgressUser() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
      if (cameraOn) stopCamera();
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setCameraOn(false);
  };

  const startCamera = async () => {
    try {
      setCameraOn(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Tidak dapat mengakses kamera.");
      setCameraOn(false);
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      setImage(dataURL);
      stopCamera();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !date || !image) {
      alert("Harap lengkapi semua field dan gambar.");
      return;
    }

    setLoading(true);

    const newProgress = { image, title, description, date };

    try {
      const response = await fetch("https://hydro-backend-production.up.railway.app/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProgress),
      });

      if (response.ok) {
        alert("Progres berhasil disimpan!");
        setImage(null);
        setTitle("");
        setDescription("");
        setDate("");
      } else {
        alert("Gagal menyimpan progres.");
      }
    } catch (error) {
      console.error("Error submitting progress:", error);
      alert("Terjadi kesalahan saat menyimpan progres.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-100 to-green-200">
      <DiagnosisNavbar />

      <main className="flex-grow px-4 py-10 sm:px-6 lg:px-12 xl:px-24">
        <div className="max-w-6xl mx-auto bg-green-50 p-8 sm:p-12 rounded-3xl shadow-xl border border-green-200">
          <h1 className="text-4xl font-extrabold text-center text-green-900 mb-12 tracking-wide">
            Input Progres Tanaman
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image Preview */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-green-300 rounded-2xl bg-green-100 p-6 min-h-[380px]">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="rounded-xl object-contain max-h-[380px] w-full shadow-md"
                  draggable={false}
                />
              ) : (
                <p className="text-green-500 text-center text-base select-none">
                  Gambar akan tampil di sini
                </p>
              )}
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-8 max-w-full"
              autoComplete="off"
            >
              {/* Input Gambar */}
              <div className="space-y-3">
                <label
                  htmlFor="fileInput"
                  className="block text-lg font-semibold text-green-900"
                >
                  Input Gambar
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-xl bg-green-50 shadow-sm focus:outline-none focus:ring-4 focus:ring-green-400 transition cursor-pointer"
                />

                {!cameraOn ? (
                  <button
                    type="button"
                    onClick={startCamera}
                    className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl shadow-md transition focus:outline-none focus:ring-4 focus:ring-emerald-400"
                  >
                    Gunakan Kamera
                  </button>
                ) : (
                  <div className="mt-4 space-y-4">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full rounded-xl border border-green-300 shadow-lg aspect-video object-cover"
                    />
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={takePhoto}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl shadow-md transition focus:outline-none focus:ring-4 focus:ring-emerald-400"
                      >
                        Ambil Foto
                      </button>
                      <button
                        type="button"
                        onClick={stopCamera}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-3 rounded-xl shadow-md transition focus:outline-none focus:ring-4 focus:ring-red-400"
                      >
                        Batal Kamera
                      </button>
                    </div>
                  </div>
                )}
                <canvas ref={canvasRef} style={{ display: "none" }} />
              </div>

              {/* Tanggal */}
              <div>
                <label
                  htmlFor="dateInput"
                  className="block text-lg font-semibold text-green-900 mb-2"
                >
                  Tanggal
                </label>
                <input
                  id="dateInput"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-green-300 rounded-xl bg-green-50 shadow-sm focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                />
              </div>

              {/* Judul */}
              <div>
                <label
                  htmlFor="titleInput"
                  className="block text-lg font-semibold text-green-900 mb-2"
                >
                  Judul
                </label>
                <input
                  id="titleInput"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Masukkan judul progres"
                  className="w-full px-4 py-3 border border-green-300 rounded-xl bg-green-50 shadow-sm focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                />
              </div>

              {/* Deskripsi */}
              <div>
                <label
                  htmlFor="descriptionInput"
                  className="block text-lg font-semibold text-green-900 mb-2"
                >
                  Deskripsi
                </label>
                <textarea
                  id="descriptionInput"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  required
                  placeholder="Masukkan deskripsi progres tanaman..."
                  className="w-full px-4 py-3 border border-green-300 rounded-xl bg-green-50 shadow-sm focus:outline-none focus:ring-4 focus:ring-green-400 transition resize-y max-h-40"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-lg transition focus:outline-none focus:ring-4 focus:ring-green-500 active:scale-95 ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Menyimpan..." : "Simpan Progres"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <DiagnosisFooter />
    </div>
  );
}
