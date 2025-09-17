import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Link açma fonksiyonu
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Firma Bilgileri */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Kayra Cam Balkon</h3>
          <p>Adres: Horozluhan, Gözüpek Sokak No:9, Konya</p>
          <p>Tel: +90 532 123 45 67</p>
          <p>Email: info@kayracambalkon.com</p>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Hızlı Linkler</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">Hakkımızda</a></li>
            <li><a href="#projects" className="hover:text-white">Projelerimiz</a></li>
            <li><a href="#contact" className="hover:text-white">İrtibat</a></li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Bizi Takip Edin</h3>
          <div className="flex space-x-4 text-2xl">
            <button
              onClick={() => openLink("https://www.facebook.com/")}
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </button>
            <button
              onClick={() => openLink("https://www.instagram.com/")}
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </button>
            <button
              onClick={() => openLink("https://www.linkedin.com/")}
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </button>
            <button
              onClick={() => openLink("https://wa.me/905321234567")}
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2025 Kayra Cam Balkon. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
