import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function DetailMovie({ idSelected, onClose }) {
  const [movieSelected, setMovieSelected] = useState(null);

  const getMovieSelected = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${idSelected}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
      );
      setMovieSelected(response.data);
    } catch (error) {
      console.error("Error fetching movie by id:", error);
    }
  };

  useEffect(() => {
    if (idSelected !== null) {
      getMovieSelected();
    }
  }, [idSelected]);

  const handleClose = (event) => {
    event.preventDefault();
    onClose();
    setMovieSelected(null);
  };

  if (!movieSelected) {
    // Tampilkan loading atau pesan lain jika data belum diambil
    return <div>Loading...</div>;
  }

  return (
    idSelected !== null && (
      <div className="fixed top-0 z-50 w-screen h-screen flex items-center bg-gray-800 bg-opacity-70 justify-center">
        <div className="relative flex max-w-3xl w-full max-h-[414px] h-full rounded-xl overflow-hidden bg-slate-600">
          <div className="relative bg-slate-200 w-1/3 h-full ">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_URL_POSTER}/${movieSelected.poster_path}`}
              alt="Img Poster"
              fill
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="p-5 w-2/3">
            <p className="text-2xl text-white mb-2">{movieSelected.title}</p>
            <div className="flex items-center mb-2">
              <div className="">
                <svg
                  width={42}
                  height={42}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_1804)">
                    <path
                      d="M9.04907 2.92705C9.34842 2.00574 10.6518 2.00574 10.9512 2.92705L12.0207 6.21885C12.1546 6.63087 12.5386 6.90983 12.9718 6.90983H16.433C17.4017 6.90983 17.8045 8.14945 17.0208 8.71885L14.2206 10.7533C13.8701 11.0079 13.7235 11.4593 13.8573 11.8713L14.9269 15.1631C15.2263 16.0844 14.1718 16.8506 13.3881 16.2812L10.5879 14.2467C10.2374 13.9921 9.76282 13.9921 9.41234 14.2467L6.61217 16.2812C5.82845 16.8506 4.77397 16.0844 5.07333 15.1631L6.1429 11.8713C6.27677 11.4593 6.13011 11.0079 5.77962 10.7533L2.97945 8.71885C2.19574 8.14945 2.59852 6.90983 3.56724 6.90983H7.02844C7.46167 6.90983 7.84562 6.63087 7.9795 6.21885L9.04907 2.92705Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1804">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-4xl ml-2 mr-5 text-white">
                {movieSelected.vote_average.toFixed(1)}
              </p>
              <div className="">
                <div className="flex space-x-5 text-sky-400">
                  <p className="">{movieSelected.release_date}</p>
                  <p>Duration : {movieSelected.runtime} Min</p>
                </div>
                <span className="text-slate-200">genre, genra</span>
              </div>
            </div>
            <h4 className="text-slate-200 mb-5">
              Overview : {movieSelected.overview}
            </h4>
            <div className="space-x-5 flex">
              <button className="py-2 px-3 border rounded-md flex bg-slate-200 hover:bg-white text-[#171717]">
                <span className="mr-2">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7519 9.16795L9.5547 7.03647C8.89015 6.59343 8 7.06982 8 7.86852V12.1315C8 12.9302 8.89015 13.4066 9.5547 12.9635L12.7519 10.8321C13.3457 10.4362 13.3457 9.56377 12.7519 9.16795Z"
                      stroke="#171717"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke="#171717"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                Play Now
              </button>
              <button className="py-2 px-3 text-white border border-white rounded-md hover:bg-slate-700 flex">
                <span className="mr-2">
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
                Watch Trailer
              </button>
            </div>
            <span
              className="absolute right-2 top-2 cursor-pointer"
              onClick={handleClose}
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#E5E7EB"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    )
  );
}

export default DetailMovie;
