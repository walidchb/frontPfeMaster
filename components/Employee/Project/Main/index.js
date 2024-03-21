import React from "react";

function MainProject({ showSideBar }) {
  return (
    <div
      className={` text-black  ${
        showSideBar
          ? "hidden sm:block sm:w-8/12 md:w-9/12 xl:w-10/12 "
          : "w-full"
      }`}>
      MainProject
    </div>
  );
}

export default MainProject;
