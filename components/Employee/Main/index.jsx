import React from "react";
import { Fragment, useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "./style.css";
import Select from "react-select";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdAddCircle,
} from "react-icons/io";
import {
  MdAlternateEmail,
  MdBusinessCenter,
  MdArrowDropDown,
  MdOutlinePassword,
} from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import TaskListElement from "../components/TaskListElement";
import AddProjectForm from "../Project/AddProjectForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpdateProjectForm from "../Project/UpdateProjectForm";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MainEmployee() {
  const [projects, setProjects] = useState([]);
  const [organizationId, setOrganizationId] = useState("");
  const [settings, setSettings] = useState({});

  const [seeAllProjectsModal, setSeeAllProjectsModal] = useState(false);
  const axiosInstance = axios.create({
    baseURL: "http://localhost:1937",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const [userInfo, setUserInfo] = useState({});
  const [organization, setOrganization] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userinfo = localStorage.getItem("userInfo");
      const orga = localStorage.getItem("organization");
      if (userinfo && orga) {
        let userJson = JSON.parse(userinfo);
        setUserInfo(userJson);
        let orgaJson = JSON.parse(orga);
        setOrganization(orgaJson);
      }
    }
  }, []);
  // const organizationId = "66609ae2a974839772c60e7b";

  const fetchProject = async (organizationId) => {
    if (userInfo?.role === "orgBoss") {
      try {
        const response = await axiosInstance.get(
          `/project/projects?organization=${organizationId}`
        );
        console.log("responseData = ", response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipes :", error);
      }
    } else if (userInfo?.role === "prjctBoss") {
      console.log("prjctBoss");
    } else {
      try {
        const response = await axiosInstance.get(`/user/userProjects`, {
          params: { userId: userInfo?._id },
        });
        console.log("responseData = ", response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipes :", error);
      }
    }
  };

  useEffect(() => {
    if (userInfo?._id) {
      fetchProject(organization?._id);
    }
  }, [organization]);

  useEffect(() => {
    function handleResize() {
      // Adjust the number of slides to show based on screen width
      const screenWidth = window.innerWidth;
      let set = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
      };
      if (screenWidth < 450) {
        setSettings(() => ({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }));
      } else if (screenWidth < 750) {
        setSettings(() => ({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: projects.length >= 2 ? 2 : 1,
          slidesToScroll: 1,
          prevArrow: <SamplePrevArrow />,
          nextArrow: <SampleNextArrow />,
        }));
      } else if (screenWidth < 1050) {
        setSettings(() => ({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: projects.length >= 3 ? 3 : 1,
          slidesToScroll: 1,
          prevArrow: <SamplePrevArrow />,
          nextArrow: <SampleNextArrow />,
        }));
      } else {
        setSettings(() => ({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: projects.length >= 4 ? 4 : 1,
          slidesToScroll: 1,
          prevArrow: <SamplePrevArrow />,
          nextArrow: <SampleNextArrow />,
        }));
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          background: "grey",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          height: "20vh",
          width: "5vh",
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    console.log(className);
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          background: "grey",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          height: "20vh",
          width: "5vh",
        }}
        onClick={onClick}
      />
    );
  }
  const handleChangeStatus = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };
  const Status = [
    { value: "worked On", label: "Worked On" },
    { value: "assigned to me", label: "Assigned to me" },
    { value: "viewed", label: "Viewed" },
    { value: "starred", label: "Starred" },
  ];
  const defaultStatus = { value: "worked on", label: "Worked On" };
  const [navigation, setNavigation] = useState([
    { name: "Worked On", href: `#`, current: true },
    { name: "Viewed", href: "#", current: false },
    { name: "Assigned to me", href: `#`, current: false },
    { name: "Starred", href: `#`, current: false },
  ]);
  const [curScreen, setCurScreen] = useState(1);
  const [showAddProjectFrom, setShowAddProjectFrom] = useState(false);
  return (
    <div
      style={{ height: "90vh" }}
      className={"  w-screen overflow-auto costumScrollBar pb-40"}>
      <div className="p-4 sm:p-10    ">
        <h1 className="w-10/12 border-b-2 py-3   ">
          Company &nbsp;&nbsp; &#x276F; &nbsp;&nbsp; departement &nbsp;&nbsp;
        </h1>

        <div className=" mt-10 w-full  flex justify-between items-center">
          <h1 className="text-2xl     ">
            Your Projects :
            {/* &nbsp;&nbsp; &#x276F; &nbsp;&nbsp; departement &nbsp;&nbsp;
          &#x276F; &nbsp;&nbsp; project Name{" "} */}
          </h1>
          <button
            onClick={() => {
              setShowAddProjectFrom(false);
              setSeeAllProjectsModal(true);
            }}
            className="underline text-blue-600 hover:no-underline">
            See all projects
          </button>
        </div>

        {projects.length > 0 ? (
          <div className=" w-12/12 overflow-auto costumScrollBar flex items-center">
            {projects.map((child, index) => (
              <ProjectCard key={index} project={child} />
            ))}
          </div>
        ) : (
          <div className="mt-2 min-w-56 max-w-56 min-h-44 max-h-44  text-gray-00 flex justify-center items-center border-gray-600  border-2 border-dashed rounded-xl">
            No Project
          </div>
        )}
      </div>
      <div className="px-4 sm:px-10 ">
        <div className="hidden sm:flex border-b-2">
          {navigation.map((item, index) => (
            <button
              onClick={() => setCurScreen(index)}
              key={item.name}
              className={classNames(
                index == curScreen
                  ? "bg-gray-900 text-white"
                  : "text-gray-900 hover:bg-gray-700 hover:text-white",
                " px-3 py-2 text-sm font-medium border-r-2"
              )}
              aria-current={item.current ? "page" : undefined}>
              {item.name}
            </button>
          ))}
        </div>
        <div className="w-12/12 sm:hidden flex flex-row-reverse">
          <div className="w-8/12 border-2 flex justify-start items-center px-2 input rounded-xl h-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24">
              <path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z" />
            </svg>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  // borderColor: state.isFocused ? "grey" : "red",
                  borderWidth: state.isFocused ? 0 : 0,
                }),
              }}
              defaultValue={defaultStatus}
              // placeholder={defaultStatus.label}
              className="w-full"
              options={Status}
              onChange={handleChangeStatus}
            />
          </div>
        </div>

        {navigation.length > 0 ? (
          <div className="">
            {navigation.map((item, index) => (
              <TaskListElement key={index} />
            ))}
          </div>
        ) : (
          <div className=" w-full my-4 py-2 text-gray-00 flex justify-center items-center border-gray-600  border-2 border-dashed">
            your Task list is emptry
          </div>
        )}
      </div>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
        className={` fixed inset-0 z-50  overflow-y-auto justify-center items-center flex     ${
          seeAllProjectsModal ? "opacity-100 visible" : "opacity-0 invisible"
        } `}>
        <div
          style={{ width: "90vw", height: "90vh" }}
          className="myShadow relative mx-auto   rounded-lg shadow-md bg-white">
          <div className="flex justify-between items-center px-5 border-b border-gray-200">
            {!showAddProjectFrom ? (
              <div className="flex justify-center items-center">
                {" "}
                <h3
                  style={{ height: "10vh" }}
                  className="hidden  mr-4 text-xl font-medium text-gray-900 sm:flex items-center">
                  All Projects (50)
                </h3>
                <button
                  onClick={() => setShowAddProjectFrom(true)}
                  className=" flex jus items-center my-4 rounded border-b-4 border-violet-700 bg-violet-500 px-4 py-2 font-bold text-white hover:border-violet-500 hover:bg-violet-400"
                  type="submit">
                  <IoMdAddCircle className="w-6 h-6 mr-2" />
                  <span> Add Project</span>
                </button>
              </div>
            ) : (
              <RiArrowGoBackFill
                onClick={() => setShowAddProjectFrom(false)}
                className="ml-2 cursor-pointer text-blue-600 h-5 w-5 mr-2 hover:transform hover:scale-110"
              />
            )}

            {showAddProjectFrom ? (
              <div className="flex justify-center items-center">
                {" "}
                <h3
                  style={{ height: "10vh" }}
                  className="text-xl sm:text-3xl font-medium text-gray-900 flex items-center">
                  Add Project{" "}
                </h3>
              </div>
            ) : null}
            <button
              type="button"
              onClick={() => setSeeAllProjectsModal(false)}
              className="text-gray-400 hover:text-gray-500 focus:outline-none">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10L4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {!showAddProjectFrom ? (
            <div>
              <h3 className="sm:hidden pl-4 pt-2  text-xl font-medium text-gray-900 flex items-center">
                All Projects (50)
              </h3>
              {projects.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap", // Elements wrap to new line when they overflow
                    justifyContent: "center", // Centers the items horizontally
                    gap: "20px", // Spacing between items
                    height: "77vh",
                    overflowY: "auto", // Enables vertical scrollbar if needed
                  }}
                  className="p-6 costumScrollBar overflow-y-auto">
                  {projects.map((child, index) => (
                    <ProjectCard key={index} project={child} />
                  ))}
                </div>
              ) : (
                <div className="m-10 min-w-56 max-w-56 min-h-44 max-h-44  text-gray-00 flex justify-center items-center border-gray-600  border-2 border-dashed rounded-xl">
                  No Project
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Centers the items horizontally
                height: "78vh",
                overflowY: "auto", // Enables vertical scrollbar if needed
              }}
              className="w-full  costumScrollBar py-10 overflow-y-auto">
              <AddProjectForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainEmployee;
