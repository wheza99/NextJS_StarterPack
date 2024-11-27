import React from "react";

function CenterColumn({ children }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center sm:items-start">
      {children}
    </div>
  );
}

export default CenterColumn;
