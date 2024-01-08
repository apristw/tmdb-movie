import React from "react";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto mt-14 ">
      <div className="text-center text-slate-700">
        <ul className="flex mb-5 space-x-10  font-bold justify-center items-center text-xl">
          <li className="cursor-pointer hover:scale-105">Conditions of Use</li>
          <li className="cursor-pointer hover:scale-105">Privacy & Policy</li>
          <li className="cursor-pointer hover:scale-105">Press Room</li>
        </ul>
        <p className="text-lg mb-14">&copy; 2023 MovieKita by Apri Setiawan</p>
      </div>
    </footer>
  );
}

export default Footer;
