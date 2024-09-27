import { useRouter } from "next/router";
import React from "react";

export default function NavHead() {
  const router = useRouter();
  let tabs = [
    {
      name: "Beranda",
      current: "/",
      href: "/",
    },
    {
      name: "Tentang Kami",
      current: "/about-us",
      href: "/about-us",
    },
    {
      name: "Program",
      current: "/program",
      href: "/program",
    },
    {
      name: "Kolaborasi",
      current: "/collaboration",
      href: "/collaboration",
    },
    {
      name: "Blog",
      current: "/blog",
      href: "/blog",
    },
    {
      name: "Donasi",
      current: "/donation",
      href: "/donation",
    },
  ];
  return (
    <div className="bg-blue-200 w-full lg:h-[90px]">
      <img
        src="/images/logo.png"
        alt="logo"
        className="w-[250px] h-[250px] absolute left-0 -top-20"
      />
      <div className="pl-[500px] lg:py-8 flex gap-8">
        {tabs?.map((v: any, i: number) => (
          <a
            className={`font-bold text-xl ${
              v?.current == router.pathname
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-700 duration-200"
            }`}
            href={v?.href}
          >
            {v?.name}
          </a>
        ))}
      </div>
    </div>
  );
}
