import React from 'react';
import video from '../assets/video.mp4';

const Hero = ({ id }) => {
  return (
    <div
      id={id}
      className="bg-black w-full text-white flex flex-col h-auto md:flex-row md:h-5/6 mt-16"
    >
      {/* Yazı kısmı */}
      <div className="bg-black flex flex-col justify-center items-center md:px-6 py-10 md:w-1/2 px-2 ">
        <div>
          <p className="text-3xl md:text-4xl font-bold text-center md:text-left">
            KAYRA CAM BALKON
          </p>
          <p className="text-lg md:text-2xl mt-4 text-center md:text-left">
            Hayallerindeki balkon konforunu evine taşı,
          </p>
          <p className="text-lg md:text-2xl text-center md:text-left">
            her mevsim manzaranın tadını çıkar.
          </p>
          <p className="text-lg md:text-2xl text-[#ff6d4d] font-bevan mt-4 text-center md:text-left">
            MURAT TUĞYAN
          </p>
        </div>
      </div>

      {/* Video kısmı */}
      <div className="bg-black w-full md:w-1/2 h-64 md:h-full flex justify-center items-center">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
