import React, { useState } from "react";
import logo from "../assets/Adsız tasarım (74).png";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ id }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // menüden seçim yapılınca kapanır
    }
  };

  return (
    <div
      id={id}
      className="bg-white h-16 w-full flex items-center px-6 fixed top-0 z-50 shadow-md"
    >
      {/* Logo ve isim */}
      <div className="flex items-center w-1/2 md:w-3/12">
        <img src={logo} alt="logo" className="h-12 w-auto" />
        <div className="flex flex-col ml-2 text-black">
          <p className="text-xl md:text-2xl font-bevan">KAYRA</p>
          <p className="text-sm md:text-lg font-bevan">CAM BALKON</p>
        </div>
      </div>

      {/* Menü (masaüstü) */}
      <div className="hidden md:flex w-6/12 justify-evenly items-center">
        <button onClick={() => scrollToSection("hero")} className="text-black font-bevan">
          Ana Sayfa
        </button>
        <button onClick={() => scrollToSection("about")} className="text-black font-bevan">
          Hakkımızda
        </button>
        <button onClick={() => scrollToSection("foto")} className="text-black font-bevan">
          Projelerimiz
        </button>
        <button onClick={() => scrollToSection("contact")} className="text-black font-bevan">
          İrtibat
        </button>
      </div>

      {/* Telefon (masaüstü) */}
      <div className="hidden md:flex w-3/12 justify-center items-center text-black">
        <FaPhone className="mr-2" /> +90 532 123 45 67
      </div>

      {/* Hamburger buton (mobil) */}
      <div className="flex md:hidden ml-auto">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-2xl text-black"
        >
          <FaBars />
        </button>
      </div>

      {/* Overlay (menü açıkken arkayı karartır) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sağdan kayan menü */}
      <div
        className={`fixed top-0 right-0 h-full w-7/12 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menü kapatma */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-black"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menü linkleri */}
        <div className="flex flex-col items-center space-y-6 mt-8">
          <button onClick={() => scrollToSection("hero")} className="text-black font-bevan">
            Ana Sayfa
          </button>
          <button onClick={() => scrollToSection("about")} className="text-black font-bevan">
            Hakkımızda
          </button>
          <button onClick={() => scrollToSection("foto")} className="text-black font-bevan">
            Projelerimiz
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-black font-bevan">
            İrtibat
          </button>

          {/* Telefon */}
          <div className="flex items-center text-black pt-6 border-t border-gray-300 w-10/12 justify-center">
            <FaPhone className="mr-2" /> +90 532 123 45 67
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
