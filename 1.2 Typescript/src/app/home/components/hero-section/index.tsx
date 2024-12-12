"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import TwoColumnLayout from "@/components/ui-custom/two-column-layout";
import CenterColumn from "@/components/ui-custom/center-column";

function HeroSection() {
  const heroContent = {
    title: "Where AI Meets",
    subtitle: "Architecture",
    desc: "Archylabs is an AI solution for architects. Creating floor plans with a single click. Archylabs also allows users to export their drawings in multiple formats, including PDF, JPG, and PNG.",
    button: {
      link: "/register",
      text: "Sign Up Free",
    },
  };

  return (
    <div className="py-48">
      <TwoColumnLayout
        leftContent={
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
              onClick={() => window.open(heroContent.button.link, "_self")}
            >
              {heroContent.button.text}
            </Button>
          </CenterColumn>
        }
        rightContent={
          <CenterColumn>
            <img
              src={"/hero_image.jpeg"}
              alt="Product screenshot"
              className="rounded-lg shadow-xl ring-1 ring-gray-400/10"
              width="1442"
              height="1442"
            />
          </CenterColumn>
        }
      />
    </div>
  );
}

export default HeroSection;
