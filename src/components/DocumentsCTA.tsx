

import { useState } from 'react';
import { FiCheckSquare as FileCheck } from 'react-icons/fi';


export default function DocumentsCTA() {
  const images = [
    { src: "/images/Proof%20document%201.jpeg", alt: "Proof document 1" },
    { src: "/images/Proof%20document%202.jpeg", alt: "Proof document 2" },
    { src: "/images/Proof%20document%203.jpeg", alt: "Proof document 3" },
    { src: "/images/Proof%20document%204.jpeg", alt: "Proof document 4" },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);

  const openModal = (idx: number) => {
    setSelectedImg(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <section id="view-documents" className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: '#E6E6FA', background: '#E6E6FA' }}>
        <div className="flex items-center gap-3">
          <FileCheck className="h-6 w-6" style={{ color: '#7C6A9C' }} />
          <h2 className="text-xl font-semibold" style={{ color: '#7C6A9C' }}>Verified Documents</h2>
        </div>
        <p className="mt-3" style={{ color: '#7C6A9C' }}>
          View medical reports, hospital letters, and cost breakdown verified by the family.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div key={img.src} className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition" onClick={() => openModal(idx)}>
              <img src={img.src} alt={img.alt} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
            <div className="relative bg-white rounded-lg p-4 max-w-2xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800" onClick={closeModal}>&times;</button>
              <img src={images[selectedImg].src} alt={images[selectedImg].alt} className="max-h-[70vh] w-auto rounded" />
              <div className="mt-2 text-gray-700">{images[selectedImg].alt}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
