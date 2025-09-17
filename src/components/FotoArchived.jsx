import React, { useState } from "react";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpeg";
import foto3 from "../assets/foto3.jpeg";
import foto4 from "../assets/foto4.jpeg";
import foto5 from "../assets/foto5.jpeg";
import foto6 from "../assets/foto6.jpeg";

const FotoArchieved = ({ id }) => {
  const fotos = [foto1, foto2, foto3, foto4, foto5, foto6];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id = {id} className="bg-gray-100 py-2 md:py-16 px-6">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-12 font-bevan">Geçmiş projelerimiz</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fotos.map((foto, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
            onClick={() => setSelectedImage(foto)}
          >
            <img
              src={foto}
              alt={`Proje ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Büyük Görsel"
            className="h-1/2 w-1/2 rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default FotoArchieved;
