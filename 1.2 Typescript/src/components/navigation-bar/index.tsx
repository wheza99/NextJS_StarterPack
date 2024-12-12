"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function NavigationBar() {
  const button = {
    login: "/login",
    register: "/register",
  };

  return (
    <header className="bg-white max-w-screen">
      <div className="max-w-screen">
        <div className="mx-auto max-w-screen px-8 md:px-12 flex h-24 items-center justify-between shadow-xl ring-1 ring-gray-400/10 ">
          <div className="flex items-center">
            <Image
              alt="Logo"
              src="Logo.svg"
              width={80}
              height={80}
              className=""
            />
            <p className="font-semibold text-2xl">Arka Arsitek</p>
          </div>

          <div className="md:flex md:items-center md:gap-6">
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
