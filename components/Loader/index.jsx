import React from "react";
import "./style.css";

function Loader() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
      <div className="loader"></div> <span>Loading...</span>
    </div>
  );
}

export default Loader;
