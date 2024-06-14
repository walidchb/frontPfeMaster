"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import ProtectedRoute from "@/components/ProtectedRoute";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../../context/AuthContext";
import { auth } from "@/app/[locale]/firebase/config";

function BoardEmployee() {
  const [sideBarEmployeeShow, setSideBarEmployeeShow] = useState(true);
  // const [user] = useAuthState(auth);
  const { user, loading } = useAuth();

  return (
    // <ProtectedRoute>
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
          <SideBarEmployee currentPage="Board" fromEmployee={true} />
        ) : null}
        <MainEmployee
          fromEmployee={true}
          sideBarEmployeeShow={sideBarEmployeeShow}
        />
      </div>
    </div>
    // </ProtectedRoute>
  );
}
// export default BoardEmployee;

export default ProtectedRoute(BoardEmployee);
