import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ id }) => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Mesajınız başarıyla gönderildi ✅");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Bir hata oluştu ❌ Lütfen tekrar deneyin.");
        }
      );
  };

  return (
    <div
      id={id}
      className="bg-black py-16 px-6 flex flex-col-reverse md:flex-row items-center gap-8"
    >
      {/* Harita */}
      <div className="bg-black flex flex-col items-center w-full md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.077787053472!2d32.50094797574122!3d37.90524447195277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08f8d7799cbed%3A0x508f50184ab53815!2sKayra%20Cam%20Metal!5e0!3m2!1str!2str!4v1758030389902!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kayra Cam Metal"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Form */}
      <div className="bg-black flex flex-col items-center w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-white mb-8">İletişim</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg"
        >
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              Adınız
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              E-posta
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Mesajınız
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#ff6d4d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e85c3d] transition-colors"
          >
            Gönder
          </button>
        </form>

        {status && <p className="mt-4 text-lg text-gray-300">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
