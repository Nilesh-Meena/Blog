import React from "react";

function Pagination() {
  return (
    <div className="flex justify-between ">
      <button className="bg-prime-red  w-24 p-4 text-white cursor-pointer">
        Previous
      </button>
      <button className="bg-prime-red w-24 p-4 text-white cursor-pointer">
        Next
      </button>
    </div>
  );
}

export default Pagination;
