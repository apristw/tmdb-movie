import YouTube from "react-youtube";

function VideoPlayer({ movieId, onClose }) {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {movieId ? (
        <div className="fixed top-0 z-50 w-screen h-screen flex items-center bg-gray-800 bg-opacity-70 justify-center">
          <div className="relative w-[1152px] h-[672px]">
            <YouTube
              videoId={movieId}
              opts={opts}
              className="w-full h-full rounded-xl overflow-hidden"
            />
            <span
              className="absolute -top-11 right-2 z-50 cursor-pointer hover:scale-105 transition-all duration-150"
              onClick={onClose}
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
      ) : (
        ""
      )}
    </>
  );
}

export default VideoPlayer;
