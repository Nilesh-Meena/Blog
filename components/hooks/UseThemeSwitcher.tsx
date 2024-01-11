import React, { useEffect, useState } from "react";

interface ThemeSwitcher {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const useThemeSwitcher = (): ThemeSwitcher => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    function handleChange() {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);

        if (!isHydrated) {
          // Check if the page is being rehydrated
          setIsHydrated(true);
          return;
        }

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [isHydrated]);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
};

export default useThemeSwitcher;
