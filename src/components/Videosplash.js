import React, { useEffect, useRef, useState } from "react";
import "./Videosplash.css";
import landingVideo from "../imagesandassets/landingpagevideo.mp4";

const VideoSplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const handleVideoEnd = () => {
      setSlideOut(true); // Trigger slide-up animation

      // Wait for the animation to finish, then call onFinish
      setTimeout(() => {
        onFinish();
      }, 1000); // matches the CSS transition duration
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
      video.play();
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [onFinish]);

  return (
    <div className={`video-splash ${slideOut ? "slide-out" : ""}`}>
      <video ref={videoRef} src={landingVideo} type="video/mp4" muted autoPlay />
    </div>
  );
};

export default VideoSplashScreen;
