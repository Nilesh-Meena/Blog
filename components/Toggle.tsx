import React, { useContext, useEffect, useState } from "react";
import { MoonIcon } from "@/components/Icons/Moon";
import { SunIcon } from "@/components/Icons/Sun";
import { useTheme } from "next-themes";
import Image from "next/image";

function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <div className="flex items-center justify-center ">
        <button
          onClick={() => setTheme("light")}
          className="items-center justify-center rounded-full p-1"
        >
          <SunIcon color="black" />
        </button>
      </div>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div className="flex items-center justify-center ">
        <button
          onClick={() => setTheme("dark")}
          className="items-center justify-center rounded-full p-1"
        >
          <MoonIcon color="black" />
        </button>
      </div>
    );
  }
}

export default Toggle;
