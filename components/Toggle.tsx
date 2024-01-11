import React, { useContext, useState } from "react";
import { MoonIcon } from "@/components/Icons/Moon";
import { SunIcon } from "@/components/Icons/Sun";

import useThemeSwitcher from "./hooks/UseThemeSwitcher";

function Toggle() {
  const { mode, setMode } = useThemeSwitcher();
  console.log(mode);
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={` items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
      >
        {mode === "dark" ? (
          <SunIcon color="black" />
        ) : (
          <MoonIcon color="black" />
        )}
      </button>
    </div>
  );
}

export default Toggle;
