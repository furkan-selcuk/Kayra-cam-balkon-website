import React from 'react';
import photo from '../assets/google.PNG'
const About = ({ id }) => { 
    return (
        <div id = {id} >
            
            <div className="bg-white w-full h-5/6 flex flex-col md:flex-row mt-4 md:mt-24 p-4">
                {/* Sol kısım - Fotoğraf */}
                <div className="w-full md:w-1/2 md:h-5/6">
                    <img
                        src={photo}
                        alt="Kayra Cam Balkon"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Sağ kısım - Hakkımızda metni */}
                <div className="w-full md:w-1/2 h-5/6 flex flex-col items-center justify-center px-4 md:px-12">
                    <h2 className="text-xl md:text-4xl font-bold text-black mt-2 md:mb-6 font-bevan">Hakkımızda</h2>
                    <p className="md:text-lg text-sm text-gray-700 leading-relaxed">
                        Kayra Cam Balkon olarak, yıllardır yaşam alanlarınıza modern, estetik ve
                        fonksiyonel çözümler sunuyoruz. Balkonlarınızı her mevsim kullanılabilir hale
                        getirerek evinize değer katıyor, manzaranızı özgürce yaşamanıza olanak tanıyoruz.
                        Kullandığımız yüksek kaliteli malzemeler ve profesyonel işçilik sayesinde,
                        güvenliği ve dayanıklılığı ön planda tutuyoruz.
                    </p>

                    <p className="md:text-lg text-sm text-gray-700 leading-relaxed mt-4">
                        Müşteri memnuniyetini daima önceliğimiz kabul ediyor, ihtiyaçlarınıza özel
                        tasarımlar ile hayalinizdeki yaşam alanlarını gerçeğe dönüştürüyoruz. Geniş ürün
                        yelpazemiz ve yenilikçi çözümlerimizle, sadece balkon değil; aynı zamanda evinizin
                        konforunu artıran estetik yaşam alanları oluşturuyoruz.
                    </p>

                    <p className="md:text-lg text-sm text-gray-700 leading-relaxed mt-4">
                        Misyonumuz; siz değerli müşterilerimize uzun ömürlü, şık ve işlevsel cam balkon
                        sistemleri sunmak, vizyonumuz ise sektörümüzde kalite ve güvenin simgesi olmaktır.
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default About;