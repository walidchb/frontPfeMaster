"use client";
import TaskDetails from "@/components/Employee/components/TaskDetails";
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
import axios from "axios";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import UpdateTaskForm from "@/components/Employee/Project/UpdateTaskForm";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TaskPage = () => {
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
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];
  const [Details, setDetails] = useState(false);
  const Status = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const patchTaskStatus = async (newStatus) => {
    try {
      const response = await axiosInstance.patch(`/task/tasks/${taskId}`, {
        status: newStatus,
      });
      const updatedTask = response.data;
      console.log("taskupdate ", response.data);

      fetchTask(taskId);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut :", error);
    }
  };

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ nextNumPages }) => {
    setNumPages(nextNumPages);
  };
  const locale = useLocale();

  const searchParams = useSearchParams();
  const taskDetails = searchParams.get("taskDetails");
  const [Assigned, setAssigned] = useState(false);
  const [ShowDetails, setShowDetails] = useState(true);
  const [sent, setSent] = useState(true);
  // Décoder les données de la tâche à partir de l'URL
  const task = taskDetails ? JSON.parse(decodeURIComponent(taskDetails)) : null;
  const [taskData, setTaskData] = useState({});
  const [showUpdateTaskForm, setShowUpdateTaskForm] = useState(false);

  const transformStatus = (status) => {
    switch (status) {
      case "Todo":
        return "To Do";
        break;
      case "Inprogress":
        return "In Progress";
        break;
      case "Inreview":
        return "In Review";
        break;
      case "Done":
        return "Done";
        break;
    }
  };

  const handleCachUpdateTaskForm = () => {
    setUpdateIssueModal(false);
    setShowUpdateTaskForm(false);
  };
  const handleShowUpdateTaskForm = () => {
    setUpdateIssueModal(true);
    setShowUpdateTaskForm(true);
  };
  const axiosInstance = axios.create({
    baseURL: "http://localhost:1937",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const taskId = "66646ed63b4dbc2fc5fe9596";
  const userId = "666435387431e9b597dd7282";

  const fetchTask = async (taskId) => {
    try {
      const response = await axiosInstance.get(`/task/tasks?_id=${taskId}`);
      const taskDat = response.data[0];
      console.log("taskDat = ", response.data[0]);
      setTaskData(taskDat);
    } catch (error) {
      console.error("Erreur lors de la récupération des équipes :", error);
    }
  };

  useEffect(() => {
    fetchTask(taskId);
    fetchComments(taskId);
  }, []);
  useEffect(() => {}, [taskData]);

  const fetchComments = async (taskId) => {
    try {
      const response = await axiosInstance.get(
        `/comment/comments?taskId=${taskId}`
      );
      const comments = response.data;
      console.log("comments = ", response.data);
      setComments(comments);
    } catch (error) {
      console.error("Erreur lors de la récupération des équipes :", error);
    }
  };
  function convertDateFormat(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
  }

  const [comments, setComments] = useState([]);
  const validationSchema = Yup.object().shape({
    comment: Yup.string().required("Le commentaire est requis"),
    comment: Yup.string().required("Le commentaire ne doit pas etre vide"),
  });

  const handleAddComment = async (values, resetForm, taskId, userId) => {
    try {
      const response = await axiosInstance.post(`/comment/comments`, {
        content: values.comment,
        taskId: taskId,
        authorId: userId,
      });
      const comment = response.data;
      console.log("comment = ", response.data);
      fetchComments(taskId);
      resetForm();
    } catch (error) {
      console.error("Erreur lors de la récupération des équipes :", error);
    }
  };
  let text =
    "Import trace for requested module:Import trace for requestedmodule: Import trace for requested module:Import trace forrequested module:Import trace for requested module:Import tracefor requested module:Import trace for requested module:Importtrace for requested module:Import trace for requestedmodule:Import trace for requested module:Import trace forrequested module:Import trace for requested module:";
  const [showMore, setShowMore] = useState(false);
  let showMoreButton = text.length >= 250 ? true : false;
  // const [showMoreButton, setShowMoreButton] = useState(false);

  const handleDownload = (imageUrl) => {
    console.log("object");
    // Implement your download logic here (explained in step 4)
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageUrl.split("/").pop()
      ? imageUrl.split("/").pop()
      : "photo "; // Adjust the filename extension as needed
    link.click();
  };

  const ImageItem = ({ image, onClick, handleDownload }) => {
    return (
      <div style={{ position: "relative" }}>
        <FaCircleDown
          onClick={handleDownload}
          className="text-white hover:text-blue-400 download w-7 h-7"
          style={{ position: "absolute", bottom: "20px", right: "60px" }}
        />

        <img
          src={image.original}
          alt={image.originalAlt}
          onClick={onClick}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  };
  const renderItem = (item) => (
    <ImageItem
      image={item}
      onClick={() => {
        /* Handle image click if needed */
      }}
      handleDownload={() => handleDownload(item.original)} // Pass download logic
    />
  );
  const options = {
    cMapUrl: "/cmaps/",
    standardFontDataUrl: "/standard_fonts/",
  };
  const [file, setFile] = useState("./walid.pdf");
  const [ShowTitle, setShowTitle] = useState(true);
  const [ShowDescription, setShowDescription] = useState(true);
  const [ShowComments, setShowComments] = useState(true);
  const [MobileScreen, setMobileScreen] = useState(false);
  const [ShowShareModal, setShowShareModal] = useState(false);
  const [updateIssueModal, setUpdateIssueModal] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [loading, setLoading] = useState(true);
  const [showAssigneeModal, setShowAssigneeModal] = useState(false);
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
  function getColor(letter) {
    // Vérifiez si letter n'est pas undefined
    if (typeof letter !== "undefined") {
      switch (letter.toLowerCase()) {
        case "a":
          return "red";
        case "b":
          return "blue";
        case "c":
          return "green";
        case "d":
          return "yellow";
        case "e":
          return "purple";
        default:
          return "black";
      }
    }
    // Si letter est undefined, retournez une couleur par défaut
    return "black";
  }
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="bg-[url('/BG.jpeg')] ">
        <NavBarAuth />
        <div
          style={{ height: "90vh" }}
          className="   mx-auto flex justify-center items-center ">
          <div
            style={{ height: "85vh", width: "98vw" }}
            className="TaskContainer text-black   bg-white rounded-lg  ">
            {windowSize.width < 780 ? (
              <div className=" cursor-pointer text-black flex h-14 rounded-t-lg  border-b-4">
                <p
                  onClick={() => setDetails(false)}
                  className={` font-semibold w-1/2 ${
                    !Details ? "bg-blue-300 text-white " : ""
                  } border-r-2 flex justify-center items-center`}>
                  Descreption
                </p>
                <p
                  onClick={() => setDetails(true)}
                  className={` font-semibold w-1/2 ${
                    Details ? "bg-blue-300 text-white " : ""
                  } border-l-2 flex justify-center items-center`}>
                  Details
                </p>
              </div>
            ) : null}
            <div className="">
              {windowSize.width < 780 ? (
                <div>
                  {!Details ? (
                    <div
                      style={{ height: "75vh", width: "98vw" }}
                      className="bg-white w-full  p-4 overflow-y-auto costumScrollBar ">
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
                          {taskData.Name}
                        </span>
                      ) : null}

                      <span
                        onClick={() => setShowDescription(!ShowDescription)}
                        className="cursor-pointer w-fit flex font-bold text-xl my-2 items-center">
                        {ShowDescription ? (
                          <IoMdArrowDropdown className="h-6 w-6" />
                        ) : (
                          <IoMdArrowDropright className="h-6 w-6" />
                        )}{" "}
                        Description :
                      </span>

                      {ShowDescription ? (
                        <div className="">
                          {showMore
                            ? taskData?.Description
                            : `${taskData.Description?.substring(0, 250)}`}
                          {showMore && (
                            <div className="my-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                              {images.map((child, index) => (
                                <div
                                  key={index}
                                  className="text-black border-2 flex flex-col justify-between items-center">
                                  <div className="overflow-hidden sm:h-32 h-20 w-50 flex justify-center items-center">
                                    <img
                                      className=""
                                      src={child.original}
                                      frameBorder="0"
                                    />
                                  </div>
                                  <div className="px-2 py-2 border-t-2 w-full flex justify-between items-center">
                                    <p className="w-10/12 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                      {child.original.split("/").pop()
                                        ? child.original.split("/").pop()
                                        : `photo dfgdfgdf ${index}`}
                                    </p>
                                    <FaCircleDown
                                      onClick={() =>
                                        handleDownload(child.original)
                                      }
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
                                  className="text-black border-2 flex flex-col justify-between items-center">
                                  <div className="overflow-hidden h-20 w-50 flex justify-center items-center">
                                    <Document
                                      file={child.original}
                                      onLoadSuccess={onDocumentLoadSuccess}>
                                      <Page
                                        pageNumber={pageNumber}
                                        width={100}
                                      />
                                    </Document>
                                  </div>
                                  <div className="px-2 py-2 border-t-2 w-full flex justify-between items-center">
                                    <p className="w-10/12 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                      {child.original.split("/").pop()
                                        ? child.original.split("/").pop()
                                        : `PDF ${index}`}
                                    </p>
                                    <FaCircleDown
                                      onClick={() =>
                                        handleDownload(child.original)
                                      }
                                      className="text-black hover:text-blue-400 download w-6 h-6 cursor-pointer"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          <button
                            className="btn"
                            onClick={() => setShowMore(!showMore)}>
                            {showMore ? "" : "..."}
                            <span className="text-sm text-blue-600">
                              {showMore ? "Show less" : "Show more"}
                            </span>
                          </button>
                        </div>
                      ) : null}
                      <div></div>
                      <div className="mb-4">
                        <span
                          onClick={() => setShowComments(!ShowComments)}
                          className="cursor-pointer w-fit flex font-bold text-xl my-2 items-center">
                          {ShowComments ? (
                            <IoMdArrowDropdown className=" h-6 w-6" />
                          ) : (
                            <IoMdArrowDropright className=" h-6 w-6" />
                          )}{" "}
                          Commentaires :
                        </span>
                        {/* <h3 className="text-xl font-bold my-2">Commentaires</h3> */}
                        {ShowComments ? (
                          <div>
                            <Formik
                              initialValues={{ comment: "" }}
                              validationSchema={validationSchema}
                              onSubmit={(values, { resetForm }) =>
                                handleAddComment(
                                  values,
                                  resetForm,
                                  taskId,
                                  userId
                                )
                              }>
                              {({ errors, touched }) => (
                                <Form>
                                  <div className="relative  mb-4">
                                    <Field
                                      as="textarea"
                                      name="comment"
                                      type="text"
                                      rows={4} // Number of visible rows
                                      cols={50} // Number of visible columns
                                      className={`h-24 w-full border ${
                                        errors.comment && touched.comment
                                          ? "border-red-500"
                                          : "border-gray-300"
                                      } flex justify-start rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                      placeholder="Ajouter un commentaire"
                                    />
                                    <button
                                      type="submit"
                                      className="absolute bottom-1 right-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
                                      <FaPaperPlane />
                                    </button>
                                  </div>
                                  {errors.comment && touched.comment && (
                                    <div className="text-red-500 mb-4">
                                      {errors.comment}
                                    </div>
                                  )}
                                </Form>
                              )}
                            </Formik>
                            {comments.length > 0 ? (
                              <ul className="">
                                {comments.map((comment, index) => (
                                  <li
                                    key={index}
                                    className="bg-gray-100 rounded-md p-2 mb-2 last:mb-0 flex items-center">
                                    <div className="bg-gray-300 rounded-full p-2 mr-4">
                                      <FaUserCircle className="text-gray-500" />
                                    </div>
                                    <div>
                                      <p className="text-gray-600 font-semibold">
                                        {comment?.authorId?.nom}{" "}
                                        {comment?.authorId?.prenom}{" "}
                                        <span className="text-gray-500 font-normal">
                                          (
                                          {convertDateFormat(
                                            comment?.createdAt
                                          )}
                                          )
                                        </span>
                                      </p>
                                      <p className="text-gray-600">
                                        {comment?.content}
                                      </p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="w-full my-4 py-2 text-gray-00 flex justify-center items-center border-gray-600 border-2 border-dashed">
                                Aucun commentaire pour le moment.
                              </p>
                            )}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{ height: "75vh", width: "98vw" }}
                      className=" w-full bg-white p-2 overflow-y-auto costumScrollBar">
                      <div className="flex justify-between items-center">
                        <Menu as="div" className=" relative w-min ">
                          <div>
                            <Menu.Button
                              style={{ height: "7vh" }}
                              className="h-full w-full flex justify-center items-center px-1 rounded-xl bg-blue-700 text-sm">
                              <div className="whitespace-nowrap px-4 py-2 text-sm text-white flex justify-start items-center">
                                <img
                                  className="w-6 h-6"
                                  src="/images/list.png"
                                  alt=""
                                />
                                <span className="mx-2">
                                  {transformStatus(taskData?.status)}
                                </span>
                              </div>
                              <MdArrowDropDown
                                color="white"
                                className="h-6 w-6"
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="cursor-pointer absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    onClick={() => patchTaskStatus("Todo")}
                                    className={classNames(
                                      active ? "bg-blue-300" : "",
                                      "px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                                    )}>
                                    <img
                                      className="w-6 h-6 mr-2"
                                      src="/images/list.png"
                                      alt=""
                                    />
                                    To Do
                                  </div>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    onClick={() =>
                                      patchTaskStatus("Inprogress")
                                    }
                                    className={classNames(
                                      active ? "bg-blue-300" : "",
                                      " px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                                    )}>
                                    <img
                                      className="w-6 h-6 mr-2"
                                      src="/images/development.png"
                                      alt=""
                                      srcset=""
                                    />{" "}
                                    In Progress
                                  </div>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    onClick={() => patchTaskStatus("Inreview")}
                                    className={classNames(
                                      active ? "bg-blue-300" : "",
                                      " px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                                    )}>
                                    <img
                                      className="w-6 h-6 mr-2"
                                      src="/images/code-review.png"
                                      alt=""
                                      srcset=""
                                    />{" "}
                                    In Review
                                  </div>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    onClick={() => patchTaskStatus("Done")}
                                    className={classNames(
                                      active ? "bg-blue-300" : "",
                                      " px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                                    )}>
                                    <img
                                      className="w-6 h-6 mr-2"
                                      src="/images/checkbox.png"
                                      alt=""
                                      srcset=""
                                    />{" "}
                                    Done
                                  </div>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        <FaShare
                          onClick={() => setShowShareModal(true)}
                          className="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-600 hover:transform hover:scale-110"
                        />
                      </div>
                      <div
                        onClick={() => setShowDetails(!ShowDetails)}
                        className={`mt-2 ${
                          ShowDetails ? "rounded-t-md" : "rounded-md"
                        }  px-4 py-2 flex justify-between border-t-2 ${
                          ShowDetails ? "" : "border-b-2"
                        } border-r-2 border-l-2 w-full  cursor-pointer`}>
                        <span>Details</span>
                        <MdArrowDropDown className="h-6 w-6 " />
                      </div>
                      {ShowDetails ? (
                        <div className="p-4 border-2 rounded-b-md w-full ">
                          <div className="my-2 flex justify-start">
                            <p className="w-6/12">Assignee</p>
                            {Assigned ? (
                              <div className="flex">
                                <FaUserCircle className=" rounded-full w-6 h-6 mr-2" />
                                <img
                                  className="bg-white rounded-full w-6 h-6 mr-2"
                                  src="/images/code-review.png"
                                  alt=""
                                  srcset=""
                                />
                                <p>value</p>
                              </div>
                            ) : (
                              <div>
                                <div className="flex">
                                  <FaUserCircle className=" rounded-full w-6 h-6 mr-2" />
                                  <p>
                                    {taskData?.affectedto
                                      ? `${taskData?.affectedto.nom} ${taskData?.affectedto.prenom}`
                                      : "Unassigned"}
                                  </p>
                                </div>
                                {!showAssigneeModal ? (
                                  <p
                                    onClick={() => setShowAssigneeModal(true)}
                                    className=" flex justify-center items-center px-1 rounded-xl text-blue-700 hover:underline cursor-pointer text-sm     ">
                                    Assign it
                                  </p>
                                ) : (
                                  <p
                                    onClick={() => setShowAssigneeModal(false)}
                                    className=" flex justify-center items-center px-1 rounded-xl text-blue-700 hover:underline cursor-pointer text-sm     ">
                                    Close
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                          {showAssigneeModal ? (
                            <div className="px-2 w-full h-[38vh]  overflow-auto costumScrollBar">
                              {people.map((person) => (
                                <li key={person.name}>
                                  <div
                                    style={{ width: "95%" }}
                                    className=" rounded-md pl-2 py-2 cursor-pointer hover:bg-blue-300 flex items-center justify-between mb-2 gap-x-6">
                                    <div className="flex items-center">
                                      <img
                                        className="h-10 w-10 lg:h-12 lg:w-12 rounded-full mr-2"
                                        src={person.imageUrl}
                                        alt=""
                                      />
                                      <div className="flex flex-col justify-center">
                                        <h3 className="text-base font-semibold  tracking-tight text-gray-900">
                                          {person.name}
                                        </h3>
                                        <p
                                          style={{ width: "80%" }}
                                          className="text-sm md:font-semibold truncate   text-indigo-600">
                                          walidchebbab2001@gmail.com
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </div>
                          ) : null}
                          <div className="my-2 flex justify-start items-center">
                            <p className="w-6/12">Priority </p>{" "}
                            <p
                              style={{
                                backgroundColor: getColor(taskData?.priorite),
                              }}
                              className={`text-white flex justify-center items-center w-10 h-10 rounded-full`}>
                              {taskData?.priorite}
                            </p>
                          </div>

                          <div className="my-2 flex justify-start">
                            <p className="w-6/12">Must start : </p>{" "}
                            <p>
                              {taskData?.dateDebutEstim
                                ? new Date(taskData?.dateDebutEstim)
                                    .toISOString()
                                    .split("T")[0]
                                : ""}
                            </p>
                          </div>
                          <div className="my-2 flex justify-start">
                            <p className="w-6/12">Must end : </p>{" "}
                            <p>
                              {taskData?.dateFinEstim
                                ? new Date(taskData?.dateFinEstim)
                                    .toISOString()
                                    .split("T")[0]
                                : ""}
                            </p>
                          </div>
                          <div className="my-2 flex justify-start">
                            <p className="w-6/12">Start Date : </p>{" "}
                            <p>
                              {taskData?.dateDebutReel
                                ? new Date(taskData?.dateDebutReel)
                                    .toISOString()
                                    .split("T")[0]
                                : "Not yet"}
                            </p>
                          </div>
                          <div className="my-2 flex justify-start">
                            <p className="w-6/12">End Date : </p>{" "}
                            <p>
                              {taskData?.dateFinReel
                                ? new Date(taskData?.dateFinReel)
                                    .toISOString()
                                    .split("T")[0]
                                : "Not yet"}
                            </p>
                          </div>
                          <div className="my-2 flex justify-start">
                            <p className="w-6/12">Project : </p>{" "}
                            <p>{taskData?.projet?.Name}</p>
                          </div>
                        </div>
                      ) : null}
                      <div className="flex justify-end px-2 py-1">
                        <div
                          onClick={handleShowUpdateTaskForm}
                          className="flex justify-center items-center mx-2 underline text-blue-700 cursor-pointer hover:no-underline ">
                          <MdEditDocument className="h-5 w-5 mr-1" />
                          <p>Edit</p>
                        </div>
                        <div className="flex justify-center items-center mx-2 underline text-blue-700 cursor-pointer hover:no-underline ">
                          <MdDelete className="h-5 w-5 mr-1" />
                          <p>Delete</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{ height: "85vh", width: "98vw" }}
                  className="TaskContainer flex overflow-hidden px-8 pt-8  rounded-lg">
                  <div className="bg-white w-9/12 lg:w-8/12 p-4 overflow-y-auto costumScrollBar ">
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
                        {taskData?.Name}
                      </span>
                    ) : null}

                    <span
                      onClick={() => setShowDescription(!ShowDescription)}
                      className="cursor-pointer w-fit flex font-bold text-xl my-2 items-center">
                      {ShowDescription ? (
                        <IoMdArrowDropdown className="h-6 w-6" />
                      ) : (
                        <IoMdArrowDropright className="h-6 w-6" />
                      )}{" "}
                      Description :
                    </span>

                    {ShowDescription ? (
                      <div className="">
                        {showMore
                          ? taskData?.Description
                          : `${taskData?.Description?.substring(0, 250)}`}
                        {showMore && (
                          <div className="my-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {images.map((child, index) => (
                              <div
                                key={index}
                                className="text-black border-2 flex flex-col justify-between items-center">
                                <div className="overflow-hidden sm:h-32 h-20 w-50 flex justify-center items-center">
                                  <img
                                    className=""
                                    src={child.original}
                                    frameBorder="0"
                                  />
                                </div>
                                <div className="px-2 py-2 border-t-2 w-full flex justify-between items-center">
                                  <p className="w-10/12 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                    {child.original.split("/").pop()
                                      ? child.original.split("/").pop()
                                      : `photo dfgdfgdf ${index}`}
                                  </p>
                                  <FaCircleDown
                                    onClick={() =>
                                      handleDownload(child.original)
                                    }
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
                                className="text-black border-2 flex flex-col justify-between items-center">
                                <div className="overflow-hidden h-20 w-50 flex justify-center items-center">
                                  <Document
                                    file={child.original}
                                    onLoadSuccess={onDocumentLoadSuccess}>
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
                                    onClick={() =>
                                      handleDownload(child.original)
                                    }
                                    className="text-black hover:text-blue-400 download w-6 h-6 cursor-pointer"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        <button
                          className="btn"
                          onClick={() => setShowMore(!showMore)}>
                          {showMore ? "" : "..."}
                          <span className="text-sm text-blue-600">
                            {showMore ? "Show less" : "Show more"}
                          </span>
                        </button>
                      </div>
                    ) : null}
                    <div></div>
                    <div className="mb-4">
                      <span
                        onClick={() => setShowComments(!ShowComments)}
                        className="cursor-pointer w-fit flex font-bold text-xl my-2 items-center">
                        {ShowComments ? (
                          <IoMdArrowDropdown className=" h-6 w-6" />
                        ) : (
                          <IoMdArrowDropright className=" h-6 w-6" />
                        )}{" "}
                        Commentaires :
                      </span>
                      {/* <h3 className="text-xl font-bold my-2">Commentaires</h3> */}
                      {ShowComments ? (
                        <div>
                          <Formik
                            initialValues={{ comment: "" }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { resetForm }) =>
                              handleAddComment(
                                values,
                                resetForm,
                                taskId,
                                userId
                              )
                            }>
                            {({ errors, touched }) => (
                              <Form>
                                <div className="relative  mb-4">
                                  <Field
                                    as="textarea"
                                    name="comment"
                                    type="text"
                                    rows={4} // Number of visible rows
                                    cols={50} // Number of visible columns
                                    className={`h-24 w-full border ${
                                      errors.comment && touched.comment
                                        ? "border-red-500"
                                        : "border-gray-300"
                                    } flex justify-start rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    placeholder="Ajouter un commentaire"
                                  />
                                  <button
                                    type="submit"
                                    className="absolute bottom-1 right-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
                                    <FaPaperPlane />
                                  </button>
                                </div>
                                {errors.comment && touched.comment && (
                                  <div className="text-red-500 mb-4">
                                    {errors.comment}
                                  </div>
                                )}
                              </Form>
                            )}
                          </Formik>
                          {comments.length > 0 ? (
                            <ul className="">
                              {comments.map((comment, index) => (
                                <li
                                  key={index}
                                  className="bg-gray-100 rounded-md p-2 mb-2 last:mb-0 flex items-center">
                                  <div className="bg-gray-300 rounded-full p-2 mr-4">
                                    <FaUserCircle className="text-gray-500" />
                                  </div>
                                  <div>
                                    <p className="text-gray-600 font-semibold">
                                      {comment?.authorId?.nom}{" "}
                                      {comment?.authorId?.prenom}{" "}
                                      <span className="text-gray-500 font-normal">
                                        ({convertDateFormat(comment?.createdAt)}
                                        )
                                      </span>
                                    </p>
                                    <p className="text-gray-600">
                                      {comment?.content}
                                    </p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="w-full my-4 py-2 text-gray-00 flex justify-center items-center border-gray-600 border-2 border-dashed">
                              Aucun commentaire pour le moment.
                            </p>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className=" w-5/12 lg:w-4/12 bg-white p-2 overflow-y-auto costumScrollBar">
                    <div className="flex justify-between items-center">
                      <Menu as="div" className=" relative w-min ">
                        <div>
                          <Menu.Button
                            style={{ height: "7vh" }}
                            className="h-full w-full flex justify-center items-center px-1 rounded-xl bg-blue-700 text-sm">
                            <div className="whitespace-nowrap px-4 py-2 text-sm text-white flex justify-start items-center">
                              <img
                                className="w-6 h-6"
                                src="/images/list.png"
                                alt=""
                              />
                              <span className="mx-2">
                                {transformStatus(taskData?.status)}
                              </span>
                            </div>
                            <MdArrowDropDown
                              color="white"
                              className="h-6 w-6"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95">
                          <Menu.Items className="cursor-pointer absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  onClick={() => patchTaskStatus("Todo")}
                                  className={classNames(
                                    active ? "bg-blue-300" : "",
                                    "px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                                  )}>
                                  <img
                                    className="w-6 h-6 mr-2"
                                    src="/images/list.png"
                                    alt=""
                                  />
                                  To Do
                                </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  onClick={() => patchTaskStatus("Inprogress")}
                                  className={classNames(
                                    active ? "bg-blue-300" : "",
                                    " px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                                  )}>
                                  <img
                                    className="w-6 h-6 mr-2"
                                    src="/images/development.png"
                                    alt=""
                                    srcset=""
                                  />{" "}
                                  In Progress
                                </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  onClick={() => patchTaskStatus("Inreview")}
                                  className={classNames(
                                    active ? "bg-blue-300" : "",
                                    " px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                                  )}>
                                  <img
                                    className="w-6 h-6 mr-2"
                                    src="/images/code-review.png"
                                    alt=""
                                    srcset=""
                                  />{" "}
                                  In Review
                                </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  onClick={() => patchTaskStatus("Done")}
                                  className={classNames(
                                    active ? "bg-blue-300" : "",
                                    " px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                                  )}>
                                  <img
                                    className="w-6 h-6 mr-2"
                                    src="/images/checkbox.png"
                                    alt=""
                                    srcset=""
                                  />{" "}
                                  Done
                                </div>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <FaShare
                        onClick={() => setShowShareModal(true)}
                        className="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-600 hover:transform hover:scale-110"
                      />
                    </div>
                    <div
                      onClick={() => setShowDetails(!ShowDetails)}
                      className={`mt-2 ${
                        ShowDetails ? "rounded-t-md" : "rounded-md"
                      }  px-4 py-2 flex justify-between border-t-2 ${
                        ShowDetails ? "" : "border-b-2"
                      } border-r-2 border-l-2 w-full  cursor-pointer`}>
                      <span>Details</span>
                      <MdArrowDropDown className="h-6 w-6 " />
                    </div>
                    {ShowDetails ? (
                      <div className=" p-4 border-2 rounded-b-md w-full relative">
                        <div className=" relative my-2 flex justify-start">
                          <p className="w-6/12">Assignee</p>
                          {Assigned ? (
                            <div className="flex">
                              <FaUserCircle className=" rounded-full w-6 h-6 mr-2" />
                              <img
                                className="bg-white rounded-full w-6 h-6 mr-2"
                                src="/images/code-review.png"
                                alt=""
                                srcset=""
                              />
                              <p>value</p>
                            </div>
                          ) : (
                            <div className="">
                              <div className="flex ">
                                <FaUserCircle className=" rounded-full w-6 h-6 mr-2" />
                                <p>
                                  {taskData?.affectedto
                                    ? `${taskData?.affectedto.nom} ${taskData?.affectedto.prenom}`
                                    : "Unassigned"}
                                </p>
                              </div>
                              {!showAssigneeModal ? (
                                <p
                                  onClick={() => setShowAssigneeModal(true)}
                                  className=" flex justify-center items-center px-1 rounded-xl text-blue-700 hover:underline cursor-pointer text-sm     ">
                                  Assign it
                                </p>
                              ) : (
                                <p
                                  onClick={() => setShowAssigneeModal(false)}
                                  className=" flex justify-center items-center px-1 rounded-xl text-blue-700 hover:underline cursor-pointer text-sm     ">
                                  Close
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                        {showAssigneeModal ? (
                          <div className="px-2 w-full h-[38vh]  overflow-auto costumScrollBar">
                            {people.map((person) => (
                              <li key={person.name}>
                                <div
                                  style={{ width: "95%" }}
                                  className=" rounded-md pl-2 py-2 cursor-pointer hover:bg-blue-300 flex items-center justify-between mb-2 gap-x-6">
                                  <div className="flex items-center">
                                    <img
                                      className="h-10 w-10 lg:h-12 lg:w-12 rounded-full mr-2"
                                      src={person.imageUrl}
                                      alt=""
                                    />
                                    <div className="flex flex-col justify-center">
                                      <h3 className="text-base font-semibold  tracking-tight text-gray-900">
                                        {person.name}
                                      </h3>
                                      <p
                                        style={{ width: "80%" }}
                                        className="text-sm md:font-semibold truncate   text-indigo-600">
                                        walidchebbab2001@gmail.com
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </div>
                        ) : null}
                        <div className="my-2 flex justify-start items-center">
                          <p className="w-6/12">Priority </p>{" "}
                          <p
                            style={{
                              backgroundColor: getColor(taskData?.priorite),
                            }}
                            className={`text-white flex justify-center items-center w-10 h-10 rounded-full`}>
                            {taskData?.priorite}
                          </p>
                        </div>

                        <div className="my-2 flex justify-start">
                          <p className="w-6/12">Must start : </p>{" "}
                          <p>
                            {taskData?.dateDebutEstim
                              ? new Date(taskData?.dateDebutEstim)
                                  .toISOString()
                                  .split("T")[0]
                              : ""}
                          </p>
                        </div>
                        <div className="my-2 flex justify-start">
                          <p className="w-6/12">Must end : </p>{" "}
                          <p>
                            {taskData?.dateFinEstim
                              ? new Date(taskData?.dateFinEstim)
                                  .toISOString()
                                  .split("T")[0]
                              : ""}
                          </p>
                        </div>
                        <div className="my-2 flex justify-start">
                          <p className="w-6/12">Start Date : </p>{" "}
                          <p>
                            {taskData?.dateDebutReel
                              ? new Date(taskData?.dateDebutReel)
                                  .toISOString()
                                  .split("T")[0]
                              : "Not yet"}
                          </p>
                        </div>
                        <div className="my-2 flex justify-start">
                          <p className="w-6/12">End Date : </p>{" "}
                          <p>
                            {taskData?.dateFinReel
                              ? new Date(taskData?.dateFinReel)
                                  .toISOString()
                                  .split("T")[0]
                              : "Not yet"}
                          </p>
                        </div>
                        <div className="my-2 flex justify-start">
                          <p className="w-6/12">Project : </p>{" "}
                          <p>{taskData?.projet?.Name}</p>
                        </div>
                      </div>
                    ) : null}
                    <div className="flex justify-end px-2 py-1">
                      <div
                        onClick={handleShowUpdateTaskForm}
                        className="flex justify-center items-center mx-2 underline text-blue-700 cursor-pointer hover:no-underline ">
                        <MdEditDocument className="h-5 w-5 mr-1" />
                        <p>Edit</p>
                      </div>
                      <div className="flex justify-center items-center mx-2 underline text-blue-700 cursor-pointer hover:no-underline ">
                        <MdDelete className="h-5 w-5 mr-1" />
                        <p>Delete</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
          className={` fixed inset-0 z-50  overflow-y-auto justify-center items-center flex     ${
            ShowShareModal ? "opacity-100 visible" : "opacity-0 invisible"
          } `}>
          <div className="myShadow sm:w-[60vw] w-[90vw] h-[90vh] relative mx-auto   rounded-lg shadow-md bg-white">
            <div className="h-[10vh] flex justify-between items-center px-5 border-b border-gray-200">
              <span className="text-black font-semibold text-2xl">
                Share task
              </span>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10L4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="px-2 w-full h-[80vh]  overflow-auto costumScrollBar">
              {people.map((person) => (
                <li key={person.name}>
                  <div className=" rounded-md px-2 py-2 cursor-pointer  flex items-center justify-between mb-2 gap-x-6">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 lg:h-12 lg:w-12 rounded-full mr-2"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div className="flex flex-col justify-center">
                        <h3 className="text-base font-semibold  tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-sm md:font-semibold truncate   text-indigo-600">
                          walidchebbab2001@gmail.com
                        </p>
                      </div>
                    </div>
                    {sent ? (
                      <GrValidate className="text-green-400 h-6 w-6" />
                    ) : (
                      <FaShare className="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-600 hover:transform hover:scale-110" />
                    )}
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
          className={` fixed inset-0 z-50  overflow-y-auto justify-center items-center flex     ${
            updateIssueModal ? "opacity-100 visible" : "opacity-0 invisible"
          } `}>
          <div
            style={{ width: "90vw", height: "90vh" }}
            className="myShadow relative mx-auto   rounded-lg shadow-md bg-white">
            <div className="flex justify-between items-center px-5 border-b border-gray-200">
              <h3
                style={{ height: "10vh" }}
                className="text-xl sm:text-3xl font-medium text-gray-900 flex items-center">
                Update Issue{" "}
              </h3>

              <button
                type="button"
                onClick={handleCachUpdateTaskForm}
                className="text-gray-400 hover:text-gray-500 focus:outline-none">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
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
              {updateIssueModal && showUpdateTaskForm ? (
                <UpdateTaskForm
                  task={taskData}
                  handleCachUpdateTaskForm={handleCachUpdateTaskForm}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProtectedRoute(TaskPage);
