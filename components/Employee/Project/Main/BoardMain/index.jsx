import React, { useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdAddCircle,
} from "react-icons/io";
import AddTaskForm from "../../AddTaskFrom";
import TaskListElement from "@/components/Employee/components/TaskListElement";
import "./style.css";
import { Formik } from "formik";
import { IoSearchCircle } from "react-icons/io5";
import UpdateTaskForm from "../../UpdateTaskForm";
function BoardMain({project}) {
  const [status, setStatus] = useState([
    { image: "list", number: false },
    { image: "development", number: true },
    { image: "code-review", number: true },
    { image: "checkbox", number: false },
  ]);
  const [showBoard, setShowBoard] = useState(true);
  const [createIssueModal, setCreateIssueModal] = useState(false);
  return (
    <div
      style={{ height: "90vh" }}
      className=" p-4 sm:p-10  w-full overflow-auto costumScrollBar">
      <span
        onClick={() => setShowBoard(!showBoard)}
        className="cursor-pointer w-fit flex font-bold text-xl  items-center">
        {showBoard ? (
          <IoMdArrowDropdown className=" h-6 w-6" />
        ) : (
          <IoMdArrowDropright className=" h-6 w-6" />
        )}{" "}
        Board &nbsp;{" "}
        <span className="text-gray-400 font-normal text-sm">(50 issues)</span>{" "}
      </span>
      {showBoard ? (
        <div className="mt-6 px-4 py-2 rounded-t-md bg-gray-300 flex flex-col sm:flex-row justify-between items-center">
          <Formik
            initialValues={{ taskName: "" }}
            validate={(values) => {
              const errors = {};

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(async () => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}>
            {({
              values,

              errors,

              touched,

              handleChange,

              handleBlur,

              handleSubmit,

              isSubmitting,

              /* and other goodies */
            }) => (
              <form
                className=" flex w-full mb-2 sm:my-0 sm:w-5/12  flex-col items-center justify-center "
                onSubmit={handleSubmit}>
                <div className="w-full">
                  <div className="bg-white flex justify-start items-center px-2 input rounded-2xl h-10 ">
                    <input
                      className="px-4 w-full focus:outline-none"
                      type="text"
                      name="taskName"
                      placeholder="Search"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.taskName}
                    />
                    <button type="submit" disabled={isSubmitting}>
                      <IoSearchCircle className=" text-blue-600 h-6 w-6" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          <div className="flex">
            {status.map((item, index) => (
              <div className="flex justify-center items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  // value={item.number}
                  className="cursor-pointer mx-2 w-5  h-5  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <img
                  src={`/images/${item.image}.png`}
                  alt={item.image}
                  className="w-5 h-5 sm:w-6 sm:h-5"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {showBoard ? (
        <div className="">
          {project.tasks.map((item, index) => (
            <TaskListElement key={index} task={item}/>
          ))}
        </div>
      ) : null}
      {/* {showBoard ? (
        <div className=" w-full py-2 text-blue-400 flex justify-center items-center  border-b-2 border-x-2 border-dashed">
          your backlog is emptry
        </div>
      ) : null} */}

      <div
        onClick={() => setCreateIssueModal(true)}
        className="flex p-4 cursor-pointer hover:text-blue-400 text-blue-600 items-center">
        <IoMdAddCircle className="w-6 h-6" />{" "}
        <span className="mx-2 font-semibold ">Create issue</span>
      </div>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
        className={` fixed inset-0 z-50  overflow-y-auto justify-center items-center flex     ${
          createIssueModal ? "opacity-100 visible" : "opacity-0 invisible"
        } `}>
        <div
          style={{ width: "90vw", height: "90vh" }}
          className="myShadow relative mx-auto   rounded-lg shadow-md bg-white">
          <div className="flex justify-between items-center px-5 border-b border-gray-200">
            <h3
              style={{ height: "10vh" }}
              className="text-xl sm:text-3xl font-medium text-gray-900 flex items-center">
              Add Issue{" "}
            </h3>

            <button
              type="button"
              onClick={() => setCreateIssueModal(false)}
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
            <AddTaskForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardMain;
