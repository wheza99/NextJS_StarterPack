"use client";

import { CenterColumn, ResponsiveContainer } from "@/app/_components/_index";
import Image from "next/image";
import React from "react";

function AboutSection() {
  const heroContent = {
    title: "Create your landing page easily with",
    desc: "Your website description here. You can introduce your company or services. Add motto and your company vision.",
    image: "https://nextjs.org/icons/next.svg",
  };

  return (
    <div className="pt-16 pb-64">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <CenterColumn>
            <Image
              src={heroContent.image}
              alt="Product screenshot"
              className="px-24 py-32 rounded-lg shadow-2xl"
              width="2500"
              height="2500"
            />
          </CenterColumn>
          <CenterColumn>
            <h1 className="text-xl font-extrabold sm:text-4xl text-center sm:text-start">
              {heroContent.title}
            </h1>
            <p className="max-w-lg sm:text-md text-center sm:text-start">
              {heroContent.desc}
            </p>
          </CenterColumn>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

export default AboutSection;
