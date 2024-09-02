import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { PiDotOutlineFill } from "react-icons/pi";
import { RxDotsVertical } from "react-icons/rx";
import timeAgo from "../utils/timeAgo";
import formatViewCount from "../utils/formatViewCount";

function VideoCard({ data }) {
  const info = data?.snippet;
  const statistics = data?.statistics;
  return (
    <div>
      <img
        alt="thumbnail"
        src={info?.thumbnails?.medium?.url}
        className="rounded-xl hover:rounded-none w-full h-52 object-cover"
      />
      <div className="flex mt-2 justify-between">
        <div className="flex">
          <FaUserCircle className="text-3xl mt-1 min-w-1/12" />
          <div className="ml-3 w-10/12">
            <p className="font-semibold line-clamp-2">{info?.title}</p>
            <div className="font-normal text-gray-500 text-sm mt-1">
              <p>{info?.channelTitle}</p>
              <p>
                <span>{formatViewCount(statistics?.viewCount)} views</span>
                <PiDotOutlineFill className="inline" />
                <span>{timeAgo(info?.publishedAt)}</span>
              </p>
            </div>
          </div>
          <RxDotsVertical className="text-base mt-1 min-w-1/12 ml-4" />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
