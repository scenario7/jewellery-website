import React from 'react';
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400", "600", "700"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });


export const NeedsCard = ({ props }) => {
  return (
    <div className="flex flex-col items-center justify-start p-4 rounded-md shadow-md text-center bg-[#C08E58] bg-opacity-60 backdrop-blur-md">
      <div className="w-16 h-16 mb-4 bg-[#101010] rounded-full p-3 items-center">{props.svg}</div>
      <h2 className={`text-md font-semibold mb-2 ${dmsans.className} tracking-tight`}>{props.title}</h2>
      <p className={`text-sm text-[#d9d9d9] tracking-tight text-center ${dmsans.className}`}>{props.subtitle}</p>
    </div>
  );
};
