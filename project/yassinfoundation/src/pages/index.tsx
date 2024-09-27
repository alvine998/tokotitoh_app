import Image from "next/image";
import { Inter } from "next/font/google";
import NavHead from "@/components/NavHead";
import Head from "next/head";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import BottomNav from "@/components/BottomNav";
import { useEffect, useState } from "react";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Home() {
  const responsive = {
    0: {
      items: 1.5,
      margin: 5,
    },
    768: {
      items: 2.5,
      margin: 10,
    },
    1024: {
      items: 1,
      margin: 5,
    },
  };
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <Head>
        <title>Yassin Foundation</title>
      </Head>
      <NavHead />

      <div className="">
        <OwlCarousel
          className="custom-owl-carousel relative"
          responsive={responsive}
          autoPlay
          autoplayTimeout={3000}
          autoplayHoverPause
          dots
          animateIn
          loop
        >
          <div className="item relative">
            <img src="/images/banner1.png" className="h-[600px] relative z-0" />
          </div>
          <div className="item relative">
            <img src="/images/banner2.png" className="h-[600px] relative z-0" />
          </div>
        </OwlCarousel>
        <div className="absolute">
          {/* More items */}
          <div className="owl-dots">
            {" "}
            {/* Negative margin top applied here */}
            {/* Dots will be rendered automatically by Owl Carousel */}
          </div>
        </div>
      </div>

      <div className="px-20 mt-20 flex flex-col gap-10 items-center justify-center">
        <div className="p-2 rounded-full bg-red-700 w-[250px] h-auto flex justify-center items-center">
          <p className="text-white text-lg">Yassin Foundation</p>
        </div>

        <div className="w-full flex justify-between gap-5">
          <div
            className={`bg-gray-500 w-full h-[500px] rounded flex justify-center items-center transition-opacity duration-700 ${
              hasScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <img alt="photo" src="/images/img1.jpeg" className="rounded" />
          </div>
          <div
            className={`w-full transition-opacity duration-700 ${
              hasScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl text-red-700 font-bold font-sans">
              Yassin Foundation
            </h2>
            <p className="text-justify text-lg mt-2">
              <strong className="text-red-700">
                YASIN Foundation (Yayasan Indonesia Bertahsin)
              </strong>{" "}
              adalah lembaga yang berfokus pada Al-Qur'an dan segala segmen
              terkait, dengan tagline “Mudah Membaca Al-Quran, Mudah Membaca
              Dunia”. Kami berkomitmen memudahkan umat dalam membaca, memahami,
              dan mengamalkan Al-Qur'an, serta mengajak para donator juga
              penerima manfaat untuk senantiasa membersamai Al-Qur'an dalam
              kehidupan mereka.
            </p>
          </div>
        </div>
      </div>

      <div className={`mt-20 px-20 flex flex-col gap-5 justify-center items-center`}>
        <div className="p-2 rounded-full bg-red-700 w-[250px] h-auto flex justify-center items-center">
          <p className="text-white text-lg">Program Kami</p>
        </div>

        <div className="w-full flex items-center justify-between gap-4 mt-5">
          <div className="w-full">
            <h2 className="text-2xl text-center text-red-700 font-bold font-sans">
              Kajian Muslimah
            </h2>
          </div>
          <div className="w-full">
            <h2 className="text-2xl text-center text-red-700 font-bold font-sans">
              Open Donasi
            </h2>
          </div>
          <div className="w-full">
            <h2 className="text-2xl text-center text-red-700 font-bold font-sans">
              Jum'at Berkah
            </h2>
          </div>
          <div className="w-full">
            <h2 className="text-2xl text-center text-red-700 font-bold font-sans">
              Kajian Mingguan
            </h2>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
