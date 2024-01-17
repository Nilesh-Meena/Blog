"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface PaginationProps {
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
}

function Pagination({ page, hasNext, hasPrev }: PaginationProps) {
  console.log(page);
  const router = useRouter();
  return (
    <div className="flex justify-between ">
      <button
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
        className="bg-prime-red  w-24 p-4 text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-80"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
        className="bg-prime-red w-24 p-4 text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-80"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
