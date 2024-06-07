"use client";
import React, { useState } from "react";
import "./style.css";
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import CalendrierView from "@/components/Calendrier";
import ProtectedRoute from "@/components/ProtectedRoute";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import MenuProject from "@/components/Employee/Project/MenuProject";

function Scheduler() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className=" bg-white text-black ">
      <NavBarAuth
        className="flex-none"
        auth={true}
        showOrganisation={false}
        isShowSideBar={true}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <div style={{ height: "90vh" }} className=" flex flex-shrink-0 ">
        {showSideBar ? <SideBarEmployee currentPage="Project" /> : null}
        {/* <MainProject showSideBar={showSideBar} /> */}
        <div
          style={{ height: "90vh" }}
          className="w-full overflow-auto costumScrollBar">
          <MenuProject activePageIndex={3} />
          Gantt
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute(Scheduler);
