"use client";

import { useState } from "react";

const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  console.log("ShareLinkButton rendered");
  return (
    <button
      onClick={handleClick}
      type="button"
      className="border px-2 py-1 rouded text-blue-700 text-sm hover:bg-blue-500 hover:text-white mb-10"
    >
      {" "}
      {clicked ? "Link copied" : "Share"}
    </button>
  );
};
export default ShareLinkButton;
