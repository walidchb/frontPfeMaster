"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import SideBarEmployee from "@/components/Employee/Project/SideBar";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";

function Employee() {
  const [sideBarShow, setSideBarShow] = useState(true);

  return (
    <div className=" bg-white text-black ">
      <NavBarAuth
        className="flex-none"
        auth={true}
        sideBarShow={sideBarShow}
        setSideBarShow={setSideBarShow}
      />
      <div style={{ height: "90vh" }} className=" flex flex-shrink-0 ">
        {/* {sideBarShow ? <SideBarEmployee /> : null} */}
        <MainEmployee sideBarShow={sideBarShow} />
      </div>
    </div>
  );
}

export default Employee;
