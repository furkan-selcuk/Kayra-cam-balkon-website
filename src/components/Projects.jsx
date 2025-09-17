import React from "react";
import ref1 from "../assets/firma1.png";
import ref2 from "../assets/firma2.png";
import ref3 from "../assets/firma3.PNG";
import ref4 from "../assets/firma4.png";
import ref5 from "../assets/firma5.png";
import ref6 from "../assets/firma6.png";

const Projects = ({ id }) => {
  return (
    <div id={id} className="w-full bg-black py-8 overflow-hidden mt-4 md:mt-24">
      <p className="text-center text-xl md:text-4xl font-bevan mb-6 text-white">
        Güzel başarılar referanslarla ölçülür
      </p>

      {/* Kaydırma alanı */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide">
          <img src={ref1} alt="Firma 1" className="h-16 w-auto mx-6" />
          <img src={ref2} alt="Firma 2" className="h-16 w-auto mx-6" />
          <img src={ref3} alt="Firma 3" className="h-16 w-auto mx-6" />
          <img src={ref4} alt="Firma 4" className="h-16 w-auto mx-6" />
          <img src={ref5} alt="Firma 5" className="h-16 w-auto mx-6" />
          <img src={ref6} alt="Firma 6" className="h-16 w-auto mx-6" />

          {/* Sonsuz döngü için kopyası */}
          <img src={ref1} alt="Firma 1" className="h-16 w-auto mx-6" />
          <img src={ref2} alt="Firma 2" className="h-16 w-auto mx-6" />
          <img src={ref3} alt="Firma 3" className="h-16 w-auto mx-6" />
          <img src={ref4} alt="Firma 4" className="h-16 w-auto mx-6" />
          <img src={ref5} alt="Firma 5" className="h-16 w-auto mx-6" />
          <img src={ref6} alt="Firma 6" className="h-16 w-auto mx-6" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
