import { useState } from "react";

export default function AppendableField({ value, onAppend }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");

  const handleBlur = () => {
    if (input.trim() !== "") {
      onAppend((prev) => prev + " " + input.trim());
    }
    setIsEditing(false);
    setInput("");
  };

  return isEditing ? (
    <input
      className="px-5 py-3 w-full outline-none"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.target.blur();
      }}
      autoFocus
    />
  ) : (
    <div
      className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
      onClick={() => setIsEditing(true)}
    >
      {value || <span className="text-gray-400 italic"></span>}
    </div>
  );
}
