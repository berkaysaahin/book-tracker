import React, { useState } from "react";

export default function BookList() {
    const books = ['book 1','book 2','book 3','book 4','book 5', 'book 6']
  const [toggled, setToggled] = useState({});

  const handleToggle = (index) => {
    setToggled((prev) => ({
        ...prev,
        [index]: !prev[index]
    }));
  };
  
  return (
    <div className="w-[40rem] h-min border-4 border-dark-text bg-white rounded-lg">
      <div className="h-min w-full border-b-4 flex justify-between items-center px-4 py-2 text-dark-text">
        Books You've read
         <img
            className="h-[2rem] w-[2rem]"
            id=""
            src={"/arrow-top-right.svg"}
          />
      </div>

      <div className="w-full grid grid-cols-1 divide-y-4 divide-dark-text text-dark-text">
        {books.map((book, i) => (
          <div
            key={i}
            className="px-4 py-2 flex flex-row justify-between items-center"
          >
            {book}
            <img
              className="h-[2rem] w-[2rem] cursor-pointer transition-transform duration-200 ease-in-out active:scale-95"
              onClick={() => handleToggle(i)}
              src={toggled[i] ? "/multiply.svg" : "/check.svg"}
              alt="toggle icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
