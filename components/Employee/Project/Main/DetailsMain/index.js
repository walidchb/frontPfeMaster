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




const ProjectDetails = () => {
  let text =
    "Import trace for requested module:Import trace for requestedmodule: Import trace for requested module:Import trace forrequested module:Import trace for requested module:Import tracefor requested module:Import trace for requested module:Importtrace for requested module:Import trace for requestedmodule:Import trace for requested module:Import trace forrequested module:Import trace for requested module:";
    const [ShowDescription, setShowDescription] = useState(true);
    const [ShowTitle, setShowTitle] = useState(true);
    const [showMore, setShowMore] = useState(false);
    let showMoreButton = text.length >= 250 ? true : false;
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

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
                    <span
                      onClick={() => setShowTitle(!ShowTitle)}
                      className="cursor-pointer w-fit flex font-bold text-xl  items-center">
                      {ShowTitle ? (
                        <IoMdArrowDropdown className=" h-6 w-6" />
                      ) : (
                        <IoMdArrowDropright className=" h-6 w-6" />
                      )}{" "}
                      Title :
                    </span>
                    {ShowTitle ? (
                      <span className="font-bold text-xl flex">
                        Import trace for requested module:Import trace for
                        requested module:
                      </span>
                    ) : null}

                    <div className="flex flex-col md:flex-row justify-around items-center my-4">
  <div className="bg-gray-800 w-full md:w-fit h-fit lg:mr-6 mb-4 md:mb-0 rounded-lg flex flex-col items-center justify-center py-20 px-4 sm:px-10">
    <img
      className="h-24 w-24 rounded-full"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
      Bonnie Green
    </h5>
    <span className="text-sm text-gray-500 dark:text-gray-400">
      Team Leader
    </span>
    <div className="text-white">Walidchebbab2001@gmail.com</div>
  </div>
    <ProgressCircle completed={5} total={12} />
</div>

                    <span
                      onClick={() => setShowDescription(!ShowDescription)}
                      className="cursor-pointer w-fit flex font-bold text-xl my-2  items-center">
                      {ShowDescription ? (
                        <IoMdArrowDropdown className=" h-6 w-6" />
                      ) : (
                        <IoMdArrowDropright className=" h-6 w-6" />
                      )}{" "}
                      Description :
                    </span>

                    {ShowDescription ? (
                      <div className="">
                        {showMore ? text : `${text.substring(0, 250)}`}
                        {showMore ? (
                          <div className="my-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {images.map((child, index) => (
                              <div
                                key={index}
                                // target="_blank"
                                className="text-black  border-2 flex flex-col justify-between items-center"
                                // href={{
                                //   pathname: `/${locale}/Employee/Task/FileViewer`,
                                //   query: { url: child.original },
                                // }}
                              >
                                <div className=" overflow-hidden sm:h-32 h-20 w-50 flex justify-center items-center">
                                  <img
                                    className=" "
                                    src={child.original}
                                    frameborder="0"
                                  />
                                </div>
                                <div className="px-2 py-2 border-t-2 w-full flex justify-between items-center">
                                  <p className="w-10/12 whitespace-nowrap overflow-hidden overflow-ellipsis ">
                                    {" "}
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
                        ) : null}
                        {showMore ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {Docs.map((child, index) => (
                              <div
                                key={index}
                                className="text-black  border-2 flex flex-col justify-between items-center">
                                <div className="overflow-hidden h-20 w-50 flex justify-center items-center">
                                  {/* <div style={{ width: 300, height: 300 }}> */}
                                  <Document
                                    file={child.original}
                                    onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pageNumber} width={100} />
                                  </Document>
                                  {/* </div> */}
                                </div>
                                <div className="px-2 py-2 border-t-2 w-full flex justify-between items-center">
                                  <p className="w-10/12 whitespace-nowrap overflow-hidden overflow-ellipsis ">
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
                        ) : null}

                        {showMoreButton ? (
                          <button
                            className="btn"
                            onClick={() => setShowMore(!showMore)}>
                            {showMore ? "" : "..."}
                            <span className="text-sm text-blue-600">
                              {" "}
                              {showMore ? "Show less" : "Show more"}
                            </span>
                          </button>
                        ) : null}
                      </div>
                    ) : null}
                    <div></div>
                  </div>
                </div>
  )
};

export default ProjectDetails;
