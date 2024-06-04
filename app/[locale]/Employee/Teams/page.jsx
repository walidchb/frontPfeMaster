"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import Teams from "@/components/Employee/Teams";
import NavBarAuth from "@/components/NavBar/NavBarAuth";

function TeamsEmployee() {
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
        {sideBarEmployeeShow ? (
          <SideBarEmployee currentPage="Team" fromEmployee={true} />
        ) : null}

        <Teams />
      </div>
    </div>
  );
}

export default TeamsEmployee;
