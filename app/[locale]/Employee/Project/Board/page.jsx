"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import MainProject from "@/components/Employee/Project/Main";
import SideBarProject from "@/components/Employee/Project/SideBar";
import BoardMain from "@/components/Employee/Project/Main/BoardMain/index";
import KanbanBoard from "@/components/Employee/Project/Main/Kanban";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";

function Board() {
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
        {showSideBar ? <SideBarProject currentPage="Board" /> : null}

        <BoardMain />
      </div>
    </div>
  );
}

export default Board;
