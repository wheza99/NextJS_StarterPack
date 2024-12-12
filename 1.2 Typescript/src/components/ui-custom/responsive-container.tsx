import React from "react";

interface ResponsiveContainerProps {
  children: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
}) => {
  return <div className="mx-auto max-w-7xl px-8 md:px-12">{children}</div>;
};

export default ResponsiveContainer;
