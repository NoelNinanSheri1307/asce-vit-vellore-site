import React, { useEffect, useRef, useState } from "react";
import "./Videosplash.css";
import landingVideo from "../imagesandassets/landingpagevideo.mp4";

const VideoSplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setSlideOut(true); // Add class that triggers slide/fade animation
    };

    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
    <div
      className={`video-splash ${slideOut ? "slide-out" : ""}`}
      onTransitionEnd={slideOut ? onFinish : null}
    >
      <video
        ref={videoRef}
        src={landingVideo}
        type="video/mp4"
        muted
        autoPlay
        playsInline
      />
    </div>
  );
};

export default VideoSplashScreen;
