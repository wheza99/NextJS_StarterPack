import React from "react";
import { ResponsiveContainer } from "./_index";

function TwoColumnLayout({ leftContent, rightContent }) {
  return (
    <ResponsiveContainer>
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
        <div>{leftContent}</div>
        <div>{rightContent}</div>
      </div>
    </ResponsiveContainer>
  );
}

export default TwoColumnLayout;
