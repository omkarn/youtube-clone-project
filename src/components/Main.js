import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openSidebar } from "../features/appSlice";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openSidebar());
  }, []);
  return (
    <div className="w-10/12 mx-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default Main;
