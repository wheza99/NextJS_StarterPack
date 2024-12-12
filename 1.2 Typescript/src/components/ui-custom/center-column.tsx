import React from "react";

interface CenterColumnProps {
  children: React.ReactNode;
}

const CenterColumn: React.FC<CenterColumnProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center sm:items-start">
      {children}
    </div>
  );
};

export default CenterColumn;
