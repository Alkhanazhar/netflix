import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="text-white px-10 md:px-8 flex flex-col gap-4 lg:pt-64 pt-0 absolute z-10">
      <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      <p className="lg:w-5/12 w-10/12 hidden md:inline-block">{description}</p>
      <div>
        <button
          onClick={() => console.log("click")}
          className="md:p-3 p-2 rounded-sm bg-opacity-40 hover:bg-opacity-20 md:px-14 text-xl bg-slate-400 "
        >
          Play now
        </button>
        <button className="md:p-3 p-2 rounded-sm bg-opacity-40 hover:bg-opacity-20 md:px-14 text-xl bg-slate-400  ms-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
