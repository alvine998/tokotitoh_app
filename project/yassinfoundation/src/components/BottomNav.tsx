import React from "react";

export default function BottomNav() {
  return (
    <div>
      <div className="w-full bg-blue-200 py-10 px-10 h-auto mt-5 flex justify-around">
        <div className="-mt-24">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[250px] h-[250px]"
          />
          <p className="-mt-20">
            Jl. Venus Barat, Kec. Rancasari, Kota Bandung
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl text-blue-700">Bantuan</h2>
          <ol className="list-disc flex flex-col gap-2 mt-4">
            <li>
              <a href="about-us">Tentang Kami</a>
            </li>
            <li>
              <a href="faq">FAQ</a>
            </li>
            <li>
              <a href="donation">Cara Donasi</a>
            </li>
            <li>
              <a href="contact">Kontak Kami</a>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="font-bold text-xl text-blue-700">Temukan Kami</h2>
          <div className="flex gap-2 mt-4">
            <button title="facebook" type="button" onClick={() => {}}>
              <img
                src="/images/facebook.png"
                alt="fb"
                className="w-[30px] h-[30px]"
              />
            </button>
            <button title="instagram" type="button" onClick={() => {}}>
              <img
                src="/images/instagram.webp"
                alt="fb"
                className="w-[30px] h-[30px]"
              />
            </button>
            <button title="youtube" type="button" onClick={() => {}}>
              <img
                src="/images/youtube.png"
                alt="fb"
                className="w-[40px] h-[30px]"
              />
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl text-blue-700">Lokasi</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.585907070683!2d107.6658554!3d-6.9399913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e81db990460b%3A0x1f14a473a08740ba!2sJl.%20Venus%20Bar.%2C%20Manjahlega%2C%20Kec.%20Rancasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040286!5e0!3m2!1sid!2sid!4v1726222556031!5m2!1sid!2sid"
            width="400"
            height="300"
            allowFullScreen
            className="mt-4"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
