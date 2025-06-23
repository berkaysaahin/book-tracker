import React, { useEffect, useState } from "react";
import FunkyButton from "./funkyButton";

const frames = ["/public/standing.svg", "/public/pointing-right.svg"];

export default function Navbar() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[70px] bg-primary border-b-[3px] border-black m-0 px-10 items-center justify-between gap-10 flex flex-row">
      <h1 className="text-black text-center text-2xl">Your own book bud!!</h1>
      <nav className="flex gap-4">
        <FunkyButton label={"Home"} />
        <FunkyButton label={"About"} />
        <FunkyButton label={"Services"} />
        <img
          className="nav-icon w-11 h-11"
          id="nav-icon"
          src={frames[frameIndex]}
        />
        <FunkyButton
          label={"Login"}
          bgColor="bg-accent"
          textColor="text-white"
          hoverBorder="hover:border-white"
        />
      </nav>
    </div>
  );
}
