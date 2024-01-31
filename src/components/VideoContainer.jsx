import React from "react";

const VideoContainer = ({ trailerId }) => {
  return (
    <>
      <div className="bg-[#8315153a] pt-24 lg:pt-0">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&autoplay=1&loop=1`}
          title="Hoisting in JavaScript 🔥(variables &amp; functions) | Namaste JavaScript Ep. 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="w-full bg-[#0000005b] aspect-video absolute top-0  pt-24 lg:pt-0"></div>
      </div>
    </>
  );
};

export default VideoContainer;
