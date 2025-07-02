import React, { useEffect, useRef, useState } from "react";
import FunkyButton from "./funkyButton";

const frames = ["/standing.svg", "/pointing-right.svg"];
const catFrames = ["/1cat.svg", "/2cat.svg", "/3cat.svg"];

export default function Navbar() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [catIndex, setCatIndex] = useState(0);
  const meow1 = useRef(null);
  const meow2 = useRef(null);
  const meow3 = useRef(null);
  const [toggle, setToggle] = useState(true);
  const isPlayingC = useRef(false);
  const clickTimeout = useRef(null);

  useEffect(() => {
    meow1.current = new Audio("/cat-meow-1.wav");
    meow2.current = new Audio("/cat-meow-2.wav");
    meow3.current = new Audio("/cat-loud.wav");
    meow3.current.addEventListener("ended", () => {
      isPlayingC.current = false;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const catInterval = setInterval(() => {
      setCatIndex((prev) => (prev + 1) % catFrames.length);
    }, 1000);

    return () => clearInterval(catInterval);
  }, []);

  
const handleClick = () => {
  // Delay single click action by 250ms to wait for possible double click
  clickTimeout.current = setTimeout(() => {
    if (isPlayingC.current) return; // block if sound C is playing

    console.log("Single click action");
    if (meow1.current && meow2.current) {
      if (toggle) {
        meow1.current.currentTime = 0;
        meow1.current.play().catch(console.error);
      } else {
        meow2.current.currentTime = 0;
        meow2.current.play().catch(console.error);
      }
      setToggle((prev) => !prev);
    }
  }, 250);
};

const handleDoubleClick = () => {
  clearTimeout(clickTimeout.current); // cancel single click sound

  if (meow3.current) {
    isPlayingC.current = true;
    meow3.current.currentTime = 0;
    meow3.current.play().catch(console.error);
  }
};

  return (
    <div className="w-full h-[75px] bg-primary border-b-[4px] border-black m-0 px-10 items-center justify-between gap-10 flex flex-row relative">
      <img
        src={catFrames[catIndex]}
        alt="Cat"
        style={{ cursor: "pointer", bottom: -61, left: "140px", position: "absolute" }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        className="w-32 h-32 object-contain"
      />
      <nav className="flex ml-auto items-end gap-4">
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
