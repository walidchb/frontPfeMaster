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
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import MenuProject from "@/components/Employee/Project/MenuProjet";

function Board() {
  const [sideBarEmployeeShow, setSideBarEmployeeShow] = useState(true);

  return (
    <div className=" bg-white text-black ">
      <NavBarAuth
        className="flex-none"
        auth={true}
        showOrganisation={true}
        isShowSideBarEmployee={true}
        sideBarEmployeeShow={sideBarEmployeeShow}
        setSideBarEmployeeShow={setSideBarEmployeeShow}
      />
      <div style={{ height: "90vh" }} className=" flex flex-shrink-0 ">
        {sideBarEmployeeShow ? <SideBarEmployee /> : null}
        <div className="w-full">
          <MenuProject activePageIndex={0} />
          <BoardMain />
        </div>
        
        
      </div>
    </div>
  );
}

export default Board;
