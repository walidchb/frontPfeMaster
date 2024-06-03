"use client";
import React, { useState } from "react";
import "./style.css";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import MenuProject from "@/components/Employee/Project/MenuProjet";
import GanttView from "@/components/Employee/Project/GanttView";

function Gantt() {
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
          <MenuProject activePageIndex={3} />
          <GanttView />
        </div>
        
      </div>
    </div>
  );
}

export default Gantt;
