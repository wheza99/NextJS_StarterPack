"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function NavigationBar() {
  const app = {
    logo: "https://nextjs.org/icons/next.svg",
    name: "Templates",
  };

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/" },
    { name: "Kontak", href: "/" },
  ];

  const button = {
    login: "/",
    register: "/",
  };

  return (
    <header className="bg-white max-w-screen">
      <div className="max-w-screen">
        <div className="mx-auto max-w-screen px-8 md:px-12 flex h-24 items-center justify-between shadow-xl ring-1 ring-gray-400/10 ">
          <div className="flex items-center">
            <Image
              alt="Logo"
              src={app.logo}
              width={80}
              height={80}
              className=""
            />
            <p className="font-semibold text-2xl pl-4">{app.name}</p>
          </div>

          <div className="md:flex md:items-center md:gap-6">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <Button onClick={() => window.open(button.login, "_self")}>
                Login
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.open(button.register, "_self")}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
