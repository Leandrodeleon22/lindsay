import Link from "next/link";
import React from "react";

type NavDetailsObject = {
  id: number;
  name: string;
  href: string;
};

type NavDetailsArr = NavDetailsObject[];

const navDetails: NavDetailsArr = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Our Vision", href: "#Our Vision" },
  { id: 3, name: "Our Mission", href: "#Our Mission" },
  { id: 4, name: "Our Services", href: "#Our Services" },
  { id: 5, name: "Meet Us", href: "#Meet Us" },
  { id: 6, name: "Get in Touch", href: "#Get in Touch" },
];

export default function Navbar() {
  return (
    <nav className="flex h bg-teal-600 justify-center">
      <div className=" h-12 items-center flex justify-between  w-7/12">
        {navDetails.map((link) => {
          return (
            <Link key={link.id} href={link.href} className="text-white">
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
