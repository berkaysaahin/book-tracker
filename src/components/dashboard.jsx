import React from "react";
import BookList from "./bookList";
import RegisterNew from "./registerNew";

export default function Dashboard() {
  return (
    <div className="max-w-screen h-screen flex items-center justify-center bg-dark-background">
      <div className="w-[75%] h-full bg-secondary flex justify-start items-start p-5 gap-5">
        <BookList />
        <RegisterNew />
      </div>
    </div>
  );
}
