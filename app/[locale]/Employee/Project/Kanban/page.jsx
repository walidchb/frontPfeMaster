"use client";
import React, { useRef } from "react";
import "./style.css";

import { Fragment, useState, useEffect } from "react";
import MainProject from "@/components/Employee/Project/Main";
import SideBarProject from "@/components/Employee/Project/SideBar";
import ProtectedRoute from "@/components/ProtectedRoute";

import SideBarEmployee from "@/components/Employee/SideBarEmployee";
import KanbanBoard from "@/components/Employee/Project/Main/Kanban";
import MainEmployee from "@/components/Employee/Main";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import MenuProject from "@/components/Employee/Project/MenuProject";
import axios from "axios";
function Kanban() {
  const [showSideBar, setShowSideBar] = useState(true);
  const [projectId, setProjectId] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [project, setProject] = useState({});
  const [reload, setReload] = useState(false);
  const [organization, setOrganization] = useState({});
  const [teamId, setTeamId] = useState("");
  const reloadpage = (a) => {
    setReload(!a)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const orga = localStorage.getItem("organization");
      const projectinfo = localStorage.getItem("project");
      const userinfo = localStorage.getItem("userInfo");
      if (userinfo && orga && projectinfo) {
        let userJson = JSON.parse(userinfo);
        setUserInfo(userJson);
        let projectJson = JSON.parse(projectinfo);
        setProjectId(projectJson?._id);
        let orgaJson = JSON.parse(orga);
        setOrganization(orgaJson);

        const team = userJson?.team.find(
          (obj) => obj.Organization === orgaJson._id
        );
        setTeamId(team?._id);
      }
    }
  }, []);
  const axiosInstance = axios.create({
    baseURL: "http://localhost:1937",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // const projectId = "666357fcb6ef230e0e262884";

  const fetchProject = async (projectId) => {
    try {
      const response = await axiosInstance.get(
        `/project/projects?_id=${projectId}`
      );
      const projectData = response.data[0];
      console.log("project = ", response.data[0]);
      setProject(projectData);
    } catch (error) {
      console.error("Erreur lors de la récupération des équipes :", error);
    }
  };

  useEffect(() => {
    fetchProject(projectId);
  }, [userInfo, projectId, reload]);
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
        {showSideBar ? <SideBarEmployee currentPage="Project" /> : null}
        {/* <MainProject showSideBar={showSideBar} /> */}
        <div className="w-full overflow-auto costumScrollBar">
          <MenuProject activePageIndex={1} />
          <KanbanBoard project={project} user={userInfo} teamId={teamId}/>
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute(Kanban);
