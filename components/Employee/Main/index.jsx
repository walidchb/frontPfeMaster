import React from "react";
import { Fragment, useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "./style.css";
import Select from "react-select";

import {
  MdAlternateEmail,
  MdBusinessCenter,
  MdArrowDropDown,
  MdOutlinePassword,
} from "react-icons/md";
import TaskListElement from "../components/TaskListElement";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MainEmployee() {
  const projects = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7];
  const [settings, setSettings] = useState({});
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
  // const settings =
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
          <button className="underline text-blue-600 hover:no-underline">
            See all projects
          </button>
        </div>

        <div className=" w-12/12 overflow-auto costumScrollBar flex items-center">
          {/* <Slider {...settings}> */}
          {projects.map((child, index) => (
            <ProjectCard key={index} />

            // <div key={index}>{child}</div>
          ))}
          {/* </Slider> */}
        </div>
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
          {/* <p className="text-l">Gender :</p> */}
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

        <div className="">
          {navigation.map((item, index) => (
            <TaskListElement key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainEmployee;
