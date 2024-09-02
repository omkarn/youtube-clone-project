import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videosData, setVideosData] = useState([]);
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideosData(json?.items);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 gap-x-4 mt-2">
      {videosData.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard key={video?.id} data={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
