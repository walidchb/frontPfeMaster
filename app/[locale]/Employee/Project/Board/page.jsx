"use client";
import React, { useRef } from "react";
import "./style.css";
import { Fragment, useState, useEffect } from "react";
import MainProject from "@/components/Employee/Project/Main";
import SideBarProject from "@/components/Employee/Project/SideBar";
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import ProtectedRoute from "@/components/ProtectedRoute";
import BoardMain from "@/components/Employee/Project/Main/BoardMain/index";
import KanbanBoard from "@/components/Employee/Project/Main/Kanban";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import MenuProject from "@/components/Employee/Project/MenuProject";
import ProjectDetails from "@/components/Employee/Project/Main/DetailsMain";
import ProgressCircle from "@/components/Employee/components/ProgressCercle";

function Board() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="bg-white text-black">
      <NavBarAuth
        className="flex-none"
        auth={true}
        showOrganisation={false}
        isShowSideBar={true}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <div style={{ height: "90vh" }} className="flex flex-shrink-0">
        {showSideBar ? <SideBarEmployee currentPage="Project" /> : null}
        <div className="w-full overflow-auto costumScrollBar">
          <MenuProject activePageIndex={0} />
          
          <ProjectDetails />
          <BoardMain />
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute(Board);