import Image from "next/image";
import React from "react";

import Logo from "public/TailwindLogo.png";

import { HiCursorClick } from "react-icons/hi";
import { FaWpforms } from "react-icons/fa";
import { ImFontSize } from "react-icons/im";

import Link from "next/link";

type MenuItemsProps = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

const menuItems: MenuItemsProps[] = [
  {
    label: "Buttons",
    path: "/buttons",
    icon: <HiCursorClick />,
  },
  {
    label: "Forms",
    path: "/forms",
    icon: <FaWpforms />,
  },
  {
    label: "Fonts",
    path: "/fonts",
    icon: <ImFontSize />,
  },
];

export function Menu() {
  return (
    <aside className="bg-gray-900 rounded-tr-2xl rounded-br-2xl flex flex-col py-3 px-8 top-0 left-0 h-screen shadow-2xl sticky">
      <Link href="/">
        <Image
          src={Logo}
          alt="Tailwind logo for menu"
          width={50}
          height={50}
          className="pb-5 mx-auto"
        />
      </Link>

      {menuItems.map((item, key) => (
        <button
          className="flex p-2 gap-3 font-lato text-lg tracking-wider items-center selection:text-red-700 text-zinc-400 hover:text-white transition"
          key={item.label + key}
        >
          {item.icon}
          <Link href={item.path}>{item.label}</Link>
        </button>
      ))}
    </aside>
  );
}
