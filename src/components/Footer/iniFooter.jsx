import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-teal-100/60 py-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {/* Kontak Kami */}
        <div>
          <h3 className="font-bold mb-4">Kontak Kami</h3>
          <p className="flex items-center mt-2">
            <IoIosMail className="text-teal-500 mr-2 text-xl" />
            <a href="mailto:marketing@humanika.co.id" className="text-gray-700">marketing@humanika.co.id</a>
          </p>
          <p className="flex items-center mt-2">
            <FaPhoneAlt className="text-teal-500 mr-2 text-xl" />
            <a href="tel:+629" className="text-gray-700">(029)-</a>
          </p>
        </div>

        {/* Jam Kerja */}
        <div>
          <h3 className="font-bold mb-4">Jam Kerja</h3>
          <p>Senin - Jumat : 08:00 - 17:00</p>
          <p>Sabtu - Minggu : LIBUR</p>
        </div>

        {/* Lokasi */}
        <div>
          <h3 className="font-bold mb-4">Lokasi</h3>
          <div className="flex items-center">
            <FaLocationDot className="text-teal-500 mr-2 text-3xl" />
            <div>
              <p>Jl. Sentot Prawirodirjo Rt. 11 Rw. 03</p>
              <p>Getas Pejaten, Jati - Kudus 59344</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
