import React, { useState } from "react";
import AppendableField from "./appendableField";

export default function RegisterNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("Name of book");
  const [author, setAuthor] = useState("Author");
  const [pages, setPages] = useState("Pages");
  const [currentPage, setCurrentPage] = useState("The page I'm on");
  const [pagesLeft, setPagesLeft] = useState("How many pages left");

  return (
    <div className="w-full text-dark-text">
      <div
        className="w-full h-[4rem] bg-secondary rounded-lg border-4 font-extrabold text-2xl border-dark-text flex items-center justify-between px-5 cursor-pointer active:scale-[.99] select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Register new book </span>
        <div className="aspect-square flex items-center justify-center">
          <img
            className={`h-[2rem] w-[2rem] transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            id=""
            src={"/chevron-down.svg"}
          />
        </div>
      </div>

      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg border-4 border-dark-text flex flex-col divide-y-4 divide-dark-text overflow-hidden ">
          <AppendableField value={name} onAppend={setName} />
          <AppendableField value={author} onAppend={setAuthor} />
          <AppendableField value={pages} onAppend={setPages} />
          <AppendableField value={currentPage} onAppend={setCurrentPage} />
          <AppendableField value={pagesLeft} onAppend={setPagesLeft} />
        </div>
      )}
      {isOpen && (
        <div className="mt-2 flex flex-row justify-between items-center">
          <span>You can fill as much info u want, I only need the name</span>
          <div className="h-[2.5rem] w-[2.5rem] rounded-lg flex bg-white items-center justify-center border-4 border-dark-text">
            <img className="h-[2rem] w-[2rem]" id="" src={"/floppy-disk.svg"} />
          </div>
        </div>
      )}
    </div>
  );
}
