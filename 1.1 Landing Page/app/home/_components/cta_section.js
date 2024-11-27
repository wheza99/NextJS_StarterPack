"use client";

import React from "react";
import { Button } from "@/components/ui/button";

function CtaSection() {
  const ctaContent = {
    title: "Your Call-to-Action here",
    desc: "Your website description here. You can introduce your company or services. Add motto and your company vision.",
    button: {
      link: "https://github.com/wheza99/nextjs-starterpack",
      text: "Download on Github",
    },
  };

  return (
    <section className="bg-gray-50 pb-48 pt-16">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center pb-8">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {ctaContent.title}
          </h2>
          <p className="text-gray-500 mt-4">{ctaContent.desc}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <Button onClick={() => window.open(ctaContent.button.link, "_self")}>
            {ctaContent.button.text}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
