import React from "react";
import Image from "next/image";
import { PaintRoller, Settings, Gem, Layers } from "lucide-react";

// Data menu sidebar
const navItems = [
  {
    title: "Profile",
    icon: Settings,
    url: "/profile",
  },
];

function DashboardSideBar() {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <div>
        <Image
          alt="Logo"
          src="Logo.svg"
          width={80}
          height={80}
          className="h-16 border-b border-gray-100"
          priority
        />
        <div>
          <div className="px-2">
            <ul className="space-y-3 border-t border-gray-100 pt-4">
              {/* Mapping navItems untuk sidebar */}
              {navItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.url}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <item.icon />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSideBar;
