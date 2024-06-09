"use client";
import { Fragment, useState, useEffect } from "react";
import {
  FaEdit,
  FaChevronDown,
  FaChevronUp,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaClipboardList,
  FaUserFriends,
  FaExclamationCircle,
  FaUserCircle,
  FaTasks,
  FaClock,
  FaClipboardCheck,
} from "react-icons/fa";
import { MdDelete, MdEditDocument } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import "./style.css";
import ProtectedRoute from "@/components/ProtectedRoute";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Select from "react-select";
import { components, Option } from "react-select";
import { FaCircleDown } from "react-icons/fa6";
import {
  MdAlternateEmail,
  MdBusinessCenter,
  MdArrowDropDown,
  MdOutlinePassword,
} from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import Loader from "@/components/Loader";
import Link from "next/link";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { pdfjs, Document, Page } from "react-pdf";
import { GrValidate } from "react-icons/gr";
import ProgressCircle from "@/components/Employee/components/ProgressCercle";
import UpdateProjectForm from "../../UpdateProjectForm";




const ProjectDetails = ({project}) => {
  
  let text =
    "Import trace for requested module:Import trace for requestedmodule: Import trace for requested module:Import trace forrequested module:Import trace for requested module:Import tracefor requested module:Import trace for requested module:Importtrace for requested module:Import trace for requestedmodule:Import trace for requested module:Import trace forrequested module:Import trace for requested module:";
    const [ShowDescription, setShowDescription] = useState(true);
    const [ShowTitle, setShowTitle] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [doneTasks, setDoneTasks] = useState(0);
    const [updateProjectModal, setUpdateProjectModal] = useState(false); 
    const [showUpdateProjectForm, setShowUpdateProjectForm] = useState(false);
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    const handleCachUpdateProjectForm = () => {
      setUpdateProjectModal(false);
      setShowUpdateProjectForm(false);
    };
    const handleShowUpdateProjectForm = () => {
      setUpdateProjectModal(true);
      setShowUpdateProjectForm(true);
    };

    const onDocumentLoadSuccess = ({ nextNumPages }) => {
      setNumPages(nextNumPages);
    };
    const images = [
      {
        original: "/images/team.jpeg",
        thumbnail: "/team.jpeg",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
      {
        original: "/images/team.jpeg",
        thumbnail: "/team.jpeg",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ];
    const Docs = [
      {
        original: "/walid.pdf",
        thumbnail: "/walid.pdf",
      },
    ];

    useEffect(() => {
      async function setWindowDim() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
  
        setLoading(false);
      }
  
      setWindowDim();
    }, []);
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      // Add event listener when component mounts
      window.addEventListener("resize", handleResize);
  
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const handleDownload = (imageUrl) => {
      console.log("object");
      window.open(imageUrl, '_blank');
    };
  return (
    <div
                 
                  className=" flex w-full">
                  <div className="bg-white flex-grow p-4 costumScrollBar ">
                  <div className="flex justify-between items-center">
                  <span
                    onClick={() => setShowTitle(!ShowTitle)}
                    className="cursor-pointer w-fit flex font-bold text-xl items-center"
                  >
                    {ShowTitle ? (
                      <IoMdArrowDropdown className=" h-6 w-6" />
                    ) : (
                      <IoMdArrowDropright className=" h-6 w-6" />
                    )}{" "}
                    Title :
                  </span>
                  <div
                    onClick={handleShowUpdateProjectForm}
                    className="flex justify-center items-center mx-2 underline text-blue-700 cursor-pointer hover:no-underline"
                  >
                    <MdEditDocument className="h-6 w-6 mr-1" />
                    <p className="text-2xl">Edit</p>
                  </div>
                </div>
                {ShowTitle ? (
                  <span className="font-bold text-xl flex">{project.Name}</span>
                ) : null}

                    <div className="flex flex-col md:flex-row justify-around items-center my-4">
  <div className="bg-gray-800 w-full md:w-fit h-fit lg:mr-6 mb-4 md:mb-0 rounded-lg flex flex-col items-center justify-center py-20 px-4 sm:px-10">
    <img
      className="h-24 w-24 rounded-full"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
      {project.boss.nom} {project.boss.prenom}
    </h5>
    <span className="text-sm text-gray-500 dark:text-gray-400">
      Project Leader
    </span>
    <div className="text-white">{project.boss.email}</div>
  </div>
    <ProgressCircle completed={doneTasks} total={project.tasks?.length} />
</div>

<span
onClick={() => setShowDescription(!ShowDescription)}
className="cursor-pointer w-fit flex font-bold text-xl my-2 items-center"
>
{ShowDescription ? (
  <IoMdArrowDropdown className="h-6 w-6" />
) : (
  <IoMdArrowDropright className="h-6 w-6" />
)}{" "}
Description :
</span>

{ShowDescription ? (
<div className="">
  {showMore ? project.Description : `${project.Description?.substring(0, 250)}`}
  {showMore && (
    <div className="my-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {images.map((child, index) => (
        <div
          key={index}
          className="text-black border-2 flex flex-col justify-between items-center"
        >
          <div className="overflow-hidden sm:h-32 h-20 w-50 flex justify-center items-center">
            <img className="" src={child.original} frameBorder="0" />
          </div>
          <div className="px-2 py-2 border-t-2 w-full flex justify-between items-center">
            <p className="w-10/12 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {child.original.split("/").pop()
                ? child.original.split("/").pop()
                : `photo dfgdfgdf ${index}`}
            </p>
            <FaCircleDown
              onClick={() => handleDownload(child.original)}
              className="text-black hover:text-blue-400 download w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  )}
  {showMore && (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {Docs.map((child, index) => (
        <div
          key={index}
          className="text-black border-2 flex flex-col justify-between items-center"
        >
          <div className="overflow-hidden h-20 w-50 flex justify-center items-center">
            <Document
              file={child.original}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={100} />
            </Document>
          </div>
          <div className="px-2 py-2 border-t-2 w-full flex justify-between items-center">
            <p className="w-10/12 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {child.original.split("/").pop()
                ? child.original.split("/").pop()
                : `PDF ${index}`}
            </p>
            <FaCircleDown
              onClick={() => handleDownload(child.original)}
              className="text-black hover:text-blue-400 download w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  )}
  <button
    className="btn"
    onClick={() => setShowMore(!showMore)}
  >
    {showMore ? "" : "..."}
    <span className="text-sm text-blue-600">
      {showMore ? "Show less" : "Show more"}
    </span>
  </button>
</div>
) : null}
</div>
<div
          style={{
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
          className={` fixed inset-0 z-50  overflow-y-auto justify-center items-center flex     ${
            updateProjectModal ? "opacity-100 visible" : "opacity-0 invisible"
          } `}>
          <div
            style={{ width: "90vw", height: "90vh" }}
            className="myShadow relative mx-auto   rounded-lg shadow-md bg-white">
            <div className="flex justify-between items-center px-5 border-b border-gray-200">
              <h3
                style={{ height: "10vh" }}
                className="text-xl sm:text-3xl font-medium text-gray-900 flex items-center">
                Update Project{" "}
              </h3>

              <button
                type="button"
                onClick={handleCachUpdateProjectForm}
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

    
            <div
            style={{
              display: "flex",
              justifyContent: "center", // Centers the items horizontally
              height: "78vh",
              overflowY: "auto", // Enables vertical scrollbar if needed
            }}
            className="p-6 costumScrollBar overflow-y-auto">
            {updateProjectModal && showUpdateProjectForm ? (
              <UpdateProjectForm project={project} handleCachUpdateProjectForm={handleCachUpdateProjectForm}/>
            ) : null}
          </div>
          </div>
        </div>
</div>
  )
};

export default ProjectDetails;
