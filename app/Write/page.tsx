"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Editor } from "novel";

function page() {
  const isAdmin = true;
  const [isOpen, setIsOpen] = useState(false);
  //   const [value, setValue] = useState("");

  //   const modules = {
  //     toolbar: [
  //       [{ header: [1, 2, 3, false] }],
  //       ["bold", "italic", "underline", "strike", "blockquote"],
  //       ["code-block"],
  //       [{ list: "ordered" }, { list: "bullet" }],
  //       ["link", "image"],
  //       ["clean"],
  //     ],
  //     clipboard: {
  //       matchVisual: false,
  //     },
  //   };
  //   const formats = [
  //     "header",
  //     "font",
  //     "size",
  //     "bold",
  //     "italic",
  //     "underline",
  //     "strike",
  //     "blockquote",
  //     "list",
  //     "bullet",
  //     "link",
  //     "image",
  //     "code-block", // Include 'code-block' in the formats array
  //   ];
  return (
    <div>
      {/* input */}
      <input type="text" placeholder="Title" className="text-3xl mb-4" />

      {/* Editor */}
      <div>
        {/* Upload Button */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src="/Images/plus.png" alt="Image" width={16} height={16} />
        </button>
        {isOpen && (
          <div>
            <button>
              <Image
                src="/Images/image.png"
                alt="Image"
                width={16}
                height={16}
              />
            </button>
            <button>
              <Image
                src="/Images/external.png"
                alt="Image"
                width={16}
                height={16}
              />
            </button>
            <button>
              <Image
                src="/Images/video.png"
                alt="Image"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
        {/* <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          placeholder="Write Something..."
        /> */}
        <Editor />
      </div>

      {/* Publish Button*/}
      <div className="w-full flex items-center justify-center gap-8">
        <button
          className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-black dark:border-white group px-8 py-2
        shadow-[0.25rem_0.25rem] active:shadow-none transition-[0.3] "
        >
          <span className="relative z-10 text-black dark:text-white group-hover:text-white text-xl duration-500">
            Save
          </span>
          <span className="absolute w-full h-full bg-black dark:bg-prime-green -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span className="absolute w-full h-full bg-black dark:bg-prime-green -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
        <button
          className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-black dark:border-white group px-8 py-2
        shadow-[0.25rem_0.25rem] active:shadow-none transition-[0.3] "
        >
          <span className="relative z-10 text-black dark:text-white group-hover:text-white text-xl duration-500">
            Publish
          </span>
          <span className="absolute w-full h-full bg-black dark:bg-prime-green -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span className="absolute w-full h-full bg-black dark:bg-prime-green -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
      </div>
    </div>
  );
}

export default page;
