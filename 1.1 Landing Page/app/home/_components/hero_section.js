"use client";

import { CenterColumn, ResponsiveContainer } from "@/app/_components/_index";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function HeroSection() {
  const heroContent = {
    title: "Create your landing page easily with",
    subtitle: "Templates",
    desc: "Your website description here. You can introduce your company or services. Add motto and your company vision.",
    button: {
      link: "https://github.com/wheza99/nextjs-starterpack",
      text: "Download on Github",
    },
    image: "https://nextjs.org/icons/next.svg",
  };

  return (
    <div className="py-32">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <CenterColumn>
            <h1 className="text-4xl font-extrabold sm:text-6xl text-center sm:text-start">
              {heroContent.title}
              <strong className="block font-extrabold text-purple-800">
                {heroContent.subtitle}
              </strong>
            </h1>
            <p className="max-w-lg sm:text-md text-center sm:text-start">
              {heroContent.desc}
            </p>
            <Button
              onClick={() => window.open(heroContent.button.link, "_new")}
            >
              {heroContent.button.text}
            </Button>
          </CenterColumn>
          <CenterColumn>
            <Image
              src={heroContent.image}
              alt="Product screenshot"
              className="px-24 py-48 rounded-lg shadow-2xl"
              width="2500"
              height="2500"
            />
          </CenterColumn>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

export default HeroSection;
