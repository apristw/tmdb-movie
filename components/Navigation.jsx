import React from "react";

function Navigation() {
  return (
    <div className="relative">
      <nav className="absolute max-w-[1440px] z-20 left-1/2 transform -translate-x-1/2 w-full py-5 px-4 flex justify-between items-center">
        <span className="text-slate-200 font-bold text-2xl cursor-pointer">
          MovieKita
        </span>
        <div>
          <p className="text-slate-200">Sign In</p>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
