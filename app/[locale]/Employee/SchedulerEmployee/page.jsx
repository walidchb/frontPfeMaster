"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import MainProject from "@/components/Employee/Project/Main";
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import CalendrierView from "@/components/Calendrier";
import KanbanBoard from "@/components/Employee/Project/Main/Kanban";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";

function SchedulerEmployee() {
  const [sideBarEmployeeShow, setSideBarEmployeeShow] = useState(true);

  return (
    <div className=" bg-white text-black ">
      <NavBarAuth
        className="flex-none"
        auth={true}
        showOrganisation={false}
        isShowSideBarEmployee={true}
        sideBarEmployeeShow={sideBarEmployeeShow}
        setSideBarEmployeeShow={setSideBarEmployeeShow}
      />
      <div style={{ height: "90vh" }} className=" flex flex-shrink-0 ">
        {sideBarEmployeeShow ? (
          <SideBarEmployee currentPage="Scheduler" />
        ) : null}
        {/* <MainProject sideBarEmployeeShow={sideBarEmployeeShow} /> */}

        <CalendrierView />
      </div>
    </div>
  );
}

export default SchedulerEmployee;
