"use client";

import { NavLinksProps } from "@/interfaces/interfaces";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavLinks = ({
  href,
  children,
  className,
  dropdownItems,
}: NavLinksProps) => {
  const pathname: string = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === href;

  const defaultClasses = ` align-middle text-ellipsis border border-solid
    transition-[0.2s] px-3 py-2 relative mr-2
    border-transparent hover:border hover:border-solid hover:border-black rounded-3xl
    hover:shadow-[0.25rem_0.25rem_rgba(0,0,0)] hover:translate-x-[-0.25rem]
    hover:translate-y-[-0.25rem] active:translate-x-0 active:shadow-none`;

  const activeClasses = ` text-ellipsis px-3 py-2 border border-solid border-black rounded-3xl shadow-[0.25rem_0.25rem_rgba(0,0,0)] translate-x-[-0.25rem] translate-y-[-0.25rem]
   `;

  const linkClasses = clsx(
    isActive ? activeClasses : defaultClasses,
    className
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative group">
      <Link
        href={href}
        className={linkClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
      {isHovered && dropdownItems && (
        <div className="flex flex-col">
          {dropdownItems.map((item) => (
            <div key={item} className="flex flex-col">
              <span className="text-xl">{item}</span>
              <span className="text-xl">{item}</span>
              <span className="text-xl">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinks;
