"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import MainProject from "@/components/Employee/Project/Main";
import SideBarProject from "@/components/Employee/Project/SideBar";
import KanbanBoard from "@/components/Employee/Project/Main/Kanban";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import MenuProject from "@/components/Employee/Project/MenuProjet";

function Kanban() {
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
        {/* <MainProject showSideBar={showSideBar} /> */}
        <div className="w-full">
          <MenuProject activePageIndex={1} />
          <KanbanBoard />
        </div>
        
      </div>
    </div>
  );
}

export default Kanban;
