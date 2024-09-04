import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "About" },
  { href: "/", name: "Explore" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black/[0.80] z-10 top-0"></div>
      <div className="container mx-auto z-20">
        {/* logo */}
        <div className="flex flex-col justify-center items-center gap-14">
          <Link href="#" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center justify-center">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className="uppercase text-white tracking-widest hover:text-accent transition-all"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <ul className="flex text-xl text-white gap-4">
            <Link
              href="/"
              className="size-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaYoutube />
            </Link>
            <Link
              href="/"
              className="size-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className="size-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaTwitter />
            </Link>
            <Link
              href="/"
              className="size-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaInstagram />
            </Link>
          </ul>
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; Copyright 2024 - Zenbrew. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
