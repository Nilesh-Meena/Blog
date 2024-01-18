import React, { ReactNode } from "react";
import clsx from "clsx";
import { ButtonProps } from "@/interfaces/interfaces";

const Button = ({ className, children }: ButtonProps) => {
  const defaultClasses = ` border border-solid border-black rounded transition-[0.2s] px-[2em] py-[0.8em] translate-x-[-0.25rem] translate-y-[-0.25rem]  shadow-[0.25rem_0.25rem_rgba(0,0,0)] active:translate-x-0 active:shadow-none
    dark:border-white dark:text-white dark:hover:border-prime-yello-secondary dark:hover:text-prime-yello-secondary
    `;

  const buttonClasses = clsx(defaultClasses, className);

  return (
    <div className="">
      <button className={buttonClasses}>{children}</button>
    </div>
  );
};

export default Button;
