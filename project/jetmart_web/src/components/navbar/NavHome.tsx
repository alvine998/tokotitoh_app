import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { PackageOpenIcon, ShoppingBag } from "lucide-react";

export default function NavHome() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef: any = useRef(null); // Reference to the dropdown element
  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  let tabs = [
    {
      name: "Beranda",
      current: "/",
      href: "/",
    },
    {
      name: "Produk",
      current: "/products",
      href: "/products",
      children: [
        {
          name: "Mesin Printing",
          current: "/products/machine",
          href: "/products/machine",
        },
        {
          name: "Bahan Baku",
          current: "/products/material",
          href: "/products/material",
        },
        {
          name: "Custom Kaos",
          current: "/products/tshirt",
          href: "/products/tshirt",
        },
      ],
    },
    {
      name: "Tentang Kami",
      current: "/about-us",
      href: "/about-us",
    },
    {
      name: "Galeri",
      current: "/gallery",
      href: "/gallery",
    },
    {
      name: "Hubungi Kami",
      current: "/contact-us",
      href: "/contact-us",
    },
  ];
  return (
    <div
      className="bg-black w-full h-16 shadow px-10 py-2 flex"
      ref={dropdownRef}
    >
      <img alt="logo" src="/images/jetmart_logo.jpeg" className="h-12" />

      <div className="flex gap-5 ml-[250px] mt-2">
        {tabs?.map((v: any, i: number) => (
          <div key={i}>
            <a
              href={v?.href}
              className={`text-xl font-sans font-semibold transition-all duration-200 ${
                v?.current == router.pathname
                  ? "text-red-700"
                  : "text-white hover:text-red-700"
              }`}
            >
              {v?.name}
            </a>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="ml-[150px] mt-1">
        <input
          type="text"
          placeholder="Cari disini"
          className="p-2 rounded-full shadow transition-all duration-200 pl-4 focus:outline-none focus:ring focus:ring-red-700"
        />
      </div>

      {/* Cart */}
      <div className="ml-10 flex gap-3 items-center">
        <button
          className="text-white"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <ShoppingBag className="w-7" />
        </button>
        <p className="text-white">0</p>
      </div>
      {/* Dropdown panel */}
      {isOpen && (
        <div
          className={`origin-top-right absolute right-5 mt-12 w-[300px] h-[400px] overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-transform duration-200 ease-out ${
            isOpen
              ? "transform opacity-100 scale-100"
              : "transform opacity-0 scale-95"
          }`}
        >
          <div className="p-2">
            <div className="mt-[150px] flex flex-col gap-2 justify-center items-center">
              <p className="text-center font-sans text-gray-500 font-semibold">
                Keranjang Masih Kosong!
              </p>
              <PackageOpenIcon className="text-gray-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
