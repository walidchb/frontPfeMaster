"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import KanbanBoard from "@/components/Employee/Project/Main/Kanban";

function BoardEmployee() {
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
        {sideBarEmployeeShow ? <SideBarEmployee currentPage="Kanban" /> : null}
        <KanbanBoard />
      </div>
    </div>
  );
}

export default BoardEmployee;
