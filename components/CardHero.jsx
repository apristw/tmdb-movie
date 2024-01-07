import Image from "next/image";
import React from "react";

function CardHero({ movies }) {
  return (
    <div className="max-w-[1440px] h-[600px] mx-auto">
      <div className="relative">
        <div className="absolute h-[600px] max-w-[1440px] w-full -z-10">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_URL}/${movies.backdrop_path}`}
            alt="foto"
            fill
            style={{ objectFit: "cover" }}
            quality={80}
            priority
          />
        </div>
      </div>
      <div className="relative text-slate-100 w-[415px] pt-32 pl-24 p-5">
        <div className="absolute">
          <h1 className="lg:text-5xl font-bold">{movies.title}</h1>
          <p className="py-4 text-sm">{movies.overview}</p>
          <button className="flex text-sm font-bold py-2 px-3 rounded-md uppercase bg-rose-800 hover:bg-rose-900">
            Watch Trailer{" "}
            <span className="ml-2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7519 9.16795L9.5547 7.03647C8.89015 6.59343 8 7.06982 8 7.86852V12.1315C8 12.9302 8.89015 13.4066 9.5547 12.9635L12.7519 10.8321C13.3457 10.4362 13.3457 9.56377 12.7519 9.16795Z"
                  stroke="#F3F4F6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke="#F3F4F6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardHero;
