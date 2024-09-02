import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../features/appSlice";

function WatchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return <div>WatchPage</div>;
}

export default WatchPage;
