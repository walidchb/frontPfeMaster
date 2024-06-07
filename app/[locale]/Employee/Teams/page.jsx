"use client";
import React, { useRef } from "react";
import "./style.css";
import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import Teams from "@/components/Employee/Teams";
import NavBarAuth from "@/components/NavBar/NavBarAuth";

function TeamsEmployee() {
  const [sideBarEmployeeShow, setSideBarEmployeeShow] = useState(true);

  // const organization = useSelector((state) => state.organization.organization);
  // console.log(JSON.parse(organization));

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

export default ProtectedRoute(TeamsEmployee);
