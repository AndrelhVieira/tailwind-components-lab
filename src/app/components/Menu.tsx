import Image from "next/image";
import React from "react";

import Logo from "public/TailwindLogo.png";
import { MenuItemsProps } from "../types";

import { HiCursorClick } from "react-icons/hi";
import Link from "next/link";

const MENU_ITEMS: MenuItemsProps[] = [
  {
    label: "Buttons",
    path: "/buttons",
  },
];

export function Menu() {
  return (
    <aside className="bg-gray-900 rounded-tr-2xl rounded-br-2xl flex flex-col py-3 px-8 top-0 left-0 h-screen shadow-2xl">
      <Link href="/">
        <Image
          src={Logo}
          alt="Tailwind logo for menu"
          width={50}
          height={50}
          className="pb-5 mx-auto"
        />
      </Link>
      <button className="flex p-2 gap-3 font-lato text-lg tracking-wider items-center selection:text-red-700 text-zinc-400 hover:text-white transition">
        <HiCursorClick className="w-5 h-5" />
        <Link href={MENU_ITEMS[0].path} className="">
          {MENU_ITEMS[0].label}
        </Link>
      </button>
    </aside>
  );
}
