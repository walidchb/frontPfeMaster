"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import MainProject from "@/components/Employee/Project/Main";
import SideBarProject from "@/components/Employee/Project/SideBar";
import ProtectedRoute from "@/components/ProtectedRoute";

import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import KanbanBoard from "@/components/Employee/Project/Main/Kanban";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import MenuProject from "@/components/Employee/Project/MenuProject";
function Kanban() {
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
        <div className="w-full overflow-auto costumScrollBar">
          <MenuProject activePageIndex={1} />
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute(Kanban);
