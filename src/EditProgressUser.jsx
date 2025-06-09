import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DiagnosisNavbar from "./components/Diagnosis/DiagnosisNavbar";
import DiagnosisFooter from "./components/Diagnosis/DiagnosisFooter";

export default function EditProgressUser() {
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [useCamera, setUseCamera] = useState(false);
  const [loading, setLoading] = useState(true);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const id = new URLSearchParams(window.location.search).get("id");

  useEffect(() => {
    fetch(`https://hydrosmart-backend-production.up.railway.app/progress/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data progres");
        return res.json();
      })
      .then((data) => {
        setImage(data.image || "");
        setDate(data.date || "");
        setTitle(data.title || "");
        setDescription(data.description || "");
        setLoading(false);
      })
      .catch((err) => {
        alert("Gagal memuat data progres.");
        console.error(err);
      });
  }, [id]);

  const handleSave = async (e) => {
    e.preventDefault();
    const updated = { image, date, title, description };

    try {
      const response = await fetch(`https://hydrosmart-backend-production.up.railway.app/progress/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updated),
      });

      if (response.ok) {
        alert("Progres berhasil diperbarui!");
        navigate("/my-progress");
      } else {
        alert("Gagal memperbarui progres.");
      }
    } catch (err) {
      console.error("Error updating progress:", err);
      alert("Terjadi kesalahan saat memperbarui progres.");
    }
  };

  const startCamera = async () => {
    setUseCamera(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setUseCamera(false);
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/png");
    setImage(dataUrl);
    stopCamera();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  if (loading) return <p className="p-4">Memuat data...</p>;

  return (
    <div className="min-h-screen bg-green-100">
      <DiagnosisNavbar />

      <div className="flex justify-center items-center px-4 py-10">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">

          {/* KIRI - Gambar */}
          <div className="md:w-1/2 bg-green-400 flex items-center justify-center p-6">
            {image ? (
              <img
                src={image}
                alt="Preview"
                className="rounded-xl object-cover max-h-[320px] shadow-md"
              />
            ) : (
              <div className="text-gray-500 italic">Tidak ada gambar</div>
            )}
          </div>

          {/* KANAN - Form */}
          <div className="md:w-1/2 p-8 space-y-4">
            <h2 className="text-3xl font-bold text-center mb-6">Edit Progres</h2>

            {/* Kamera aktif */}
            {useCamera && (
              <>
                <video ref={videoRef} autoPlay className="w-full rounded-lg mb-2" />
                <canvas ref={canvasRef} className="hidden" />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={takePhoto}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Ambil Foto
                  </button>
                  <button
                    type="button"
                    onClick={stopCamera}
                    className="flex-1 bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
                  >
                    Batal Kamera
                  </button>
                </div>
              </>
            )}

            {!useCamera && (
              <>
                <button
                  type="button"
                  onClick={startCamera}
                  className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  Gunakan Kamera
                </button>

                <label className="block text-sm mt-3">
                  <span className="block text-sm font-medium mb-1">Ambil Gambar dari File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-700"
                  />
                </label>
              </>
            )}

            {/* Form */}
            <form onSubmit={handleSave} className="space-y-4 pt-4">
              <label className="block space-y-1">
                <span className="text-sm font-medium">Tanggal</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </label>

              <label className="block space-y-1">
                <span className="text-sm font-medium">Judul</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </label>

              <label className="block space-y-1">
                <span className="text-sm font-medium">Deskripsi</span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="4"
                  required
                />
              </label>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Perbarui Progres
              </button>
            </form>
          </div>
        </div>
      </div>

      <DiagnosisFooter />
    </div>
  );
}
