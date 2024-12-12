import React from "react";
import TwoColumnLayout from "@/components/ui-custom/two-column-layout";
import CenterColumn from "@/components/ui-custom/center-column";

function FeatureSection() {
  const featureContent = {
    highlight: "Articial Inteligence",
    title: "Accelerate Your Design Process",
    desc: "Get more projects done, finish your design faster, and generate floor plans with a single click.",
    featureList: [
      {
        text: "Artificial Inteligence",
        desc: "Ask anything about the architectural design process with our AI. Starting from concept until budgeting.",
      },
      {
        text: "Single Click Floorplan",
        desc: "Generate floorplans with a single click. You have up to eight options to showcase to your clients.",
      },
      {
        text: "Automate and Grow",
        desc: "Automate and Grow: Eliminate busywork and get more design projects done faster than ever.",
      },
    ],
  };

  return (
    <div className="py-48">
      <TwoColumnLayout
        leftContent={
          <CenterColumn>
            <img
              src={"/feature_image.jpeg"}
              alt="Product screenshot"
              className="rounded-lg shadow-xl ring-1 ring-gray-400/10"
              width="1442"
              height="1442"
            />
          </CenterColumn>
        }
        rightContent={
          <CenterColumn>
            <div className="space-y-2">
              <h2 className="font-semibold text-indigo-600">
                {featureContent.highlight}
              </h2>
              <p className=" text-5xl font-semibold tracking-tight text-gray-900">
                {featureContent.title}
              </p>
              <p className="text-gray-600">{featureContent.desc}</p>
            </div>
            <div className="space-y-4 text-base/7 text-gray-600">
              {featureContent.featureList.map((feature, index) => (
                <div className="relative" key={index}>
                  {" "}
                  {/* Menambahkan key di sini */}
                  <div className="inline font-semibold text-gray-900">
                    {feature.text}
                  </div>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </CenterColumn>
        }
      />
    </div>
  );
}

export default FeatureSection;
