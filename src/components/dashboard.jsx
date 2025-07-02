import React from "react";
import BookList from "./bookList";
import RegisterNew from "./registerNew";

export default function Dashboard() {
  return (
    <div className="relative w-screen h-screen bg-dark-background overflow-hidden">
      {/* Left PNG */}
      <img
        src="/liner.png"
        alt="Left"
        className="absolute left-0 top-0 h-full w-[220px] object-cover pointer-events-none"
        style={{ width: "auto", maxWidth: "100%", height: "100%" }}
      />

      {/* Right PNG */}
      <img
        src="/liner.png"
        alt="Right"
        className="absolute right-0 top-0 h-full w-[220px] object-cover pointer-events-none scale-x-[-1]"
        style={{ width: "auto", maxWidth: "100%", height: "100%" }}
      />

      {/* Main content */}
      <div className="relative w-[77%] h-full mx-auto flex justify-start items-start p-5 gap-5 bg-background bg-opacity-80">
        <BookList />
        <RegisterNew />
      </div>
    </div>
  );
}
