import React from "react";

function Button() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button className="bg-black text-white  border border-solid border-black rounded transition-[0.2s] px-[2em] py-[0.8em]  hover:bg-button-hover hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_rgba(0,0,0)]  active:translate-x-0 active:shadow-none ">
        Get Started
      </button>
    </div>
  );
}

export default Button;
