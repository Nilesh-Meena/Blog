"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavLinksProps } from "@/interfaces/interfaces";

const NavLinks = ({
  href,
  children,
  className,
  dropdownItems,
}: NavLinksProps) => {
  const path = usePathname();
  const active = path === href;

  const defaultClasses = `block px-2 py-2 transition-[0.2s] rounded-full border border-transparent hover:border-black hover:bg-button-hover hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_rgba(0,0,0)] active:translate-x-0 active:shadow-none`;

  const underlineClass = `underline underline-offset-4 hover:no-underline `;

  const linkClass = clsx(
    defaultClasses,
    { [underlineClass]: active },
    className
  );

  return (
    <div className="flex gap-1">
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    </div>
  );
};

export default NavLinks;
