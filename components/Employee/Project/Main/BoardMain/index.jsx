import React, { useState, useEffect } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdAddCircle,
} from "react-icons/io";
import AddTaskForm from "../../AddTaskFrom";
import TaskListElement from "@/components/Employee/components/TaskListElement";
import "./style.css";
import { Formik, Form, Field } from "formik";
import UpdateTaskForm from "../../UpdateTaskForm";
import {
  IoSearchCircle,
  IoAddCircleSharp,
  IoCloseCircleSharp,
} from "react-icons/io5";

function BoardMain({ project, user, teamId, reloadpage, reload }) {
  const [status, setStatus] = useState([
    { id: 1, image: "list", number: false },
    { id: 2, image: "development", number: true },
    { id: 3, image: "code-review", number: true },
    { id: 4, image: "checkbox", number: false },
    { id: 5, image: "croix-rouge", number: false }
  ]);
  const [taskFeteched, setTaskFeteched] = useState(false);
  const [filtreDone, setfiltreDone] = useState(false);
  const [filtreTodo, setfiltreTodo] = useState(false);
  const [filtreInreview, setfiltreInreview] = useState(false);
  const [filtreInprogress, setfiltreInprogress] = useState(false);
  const [filtreCancel, setfiltreCancel] = useState(false);
  const [showBoard, setShowBoard] = useState(true);
  const [createIssueModal, setCreateIssueModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const initialValuesSearchTask = { Name: "" };
  const [inputTaskValue, setInputTaskValue] = useState("");
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  useEffect(() => {
    let taskss;
    // switch (user?.role) {
    //   case "employee":
    //     taskss = project.tasks;
    //     // ?.filter((task) => task.affectedto === user._id) || [];
    //     break;
    //   case "teamBoss":
    //     taskss = project.tasks;
    //     // ?.filter((task) => task.team === teamId) || [];
    //     break;
    //   default:
    //     taskss = project.tasks;
    //     break;
    // }

    let filteredTasks = project.tasks;
    setTasks(filteredTasks);

    // Filtrer par statut
    const statusFilters = [
      filtreDone,
      filtreTodo,
      filtreInreview,
      filtreInprogress,
      filtreCancel
    ];
    if (statusFilters.some((filter) => filter)) {
      filteredTasks = filteredTasks.filter((task) => {
        const statusMatch =
          (filtreDone && task.status === "Done") ||
          (filtreTodo && task.status === "Todo") ||
          (filtreInreview && task.status === "Inreview") ||
          (filtreInprogress && task.status === "Inprogress") ||
          (filtreCancel && task.status === "Cancel");

        // Si aucune case n'est cochée, afficher toutes les tâches
        if (!statusFilters.some((filter) => filter)) {
          return true;
        }

        // Sinon, filtrer les tâches en fonction des cases cochées
        return statusMatch;
      });
    }

    // Filtrer par nom de tâche si taskFeteched est true
    if (taskFeteched && inputTaskValue) {
      filteredTasks = filteredTasks.filter((task) =>
        task.Name.toLowerCase().includes(inputTaskValue.toLowerCase())
      );
    }

    setTasks(filteredTasks);
  }, [
    project,
    inputTaskValue,
    filtreDone,
    filtreTodo,
    filtreInreview,
    filtreInprogress,
    filtreCancel,
    taskFeteched,
    user?.role,
    teamId,
  ]);

  const handleSubmitSearchTask = async (values, { setSubmitting }) => {
    if (values.Name.trim() === "") {
      setTaskFeteched(false);
      setInputTaskValue("");
    } else {
      setTaskFeteched(true);
      setInputTaskValue(values.Name);
    }
  };

  useEffect(() => {
    let taskss;
    switch (user?.role) {
      case "employee":
        taskss = project.tasks;
        // ?.filter((task) => task.affectedto === user._id) || [];
        break;
      case "teamBoss":
        taskss = project.tasks;
        // ?.filter((task) => task.team === teamId) || [];
        break;
      default:
        taskss = project.tasks;
        break;
    }
    setTasks(taskss);
  }, []);

  const handleFilterDoneChange = () => {
    setfiltreDone(!filtreDone);
  };

  const handleFilterTodoChange = () => {
    setfiltreTodo(!filtreTodo);
  };

  const handleFilterInreviewChange = () => {
    setfiltreInreview(!filtreInreview);
  };

  const handleFilterInprogressChange = () => {
    setfiltreInprogress(!filtreInprogress);
  };

  const handleFilterCancelChange = () => {
    setfiltreCancel(!filtreCancel);
  }
  const handleShowAddTaskForm = () => {
    setCreateIssueModal(true);
    setShowAddTaskForm(true);
  };
  const handleCachAddTaskForm = () => {
    setCreateIssueModal(false);
    setShowAddTaskForm(false);
  };
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
        <span className="text-gray-400 font-normal text-sm">
          ({tasks?.length} tasks)
        </span>{" "}
      </span>
      {showBoard ? (
        <div className="w-full mt-6 px-4 py-2 rounded-t-md bg-gray-300 flex flex-col sm:flex-row justify-between items-center">
          <Formik
            initialValues={initialValuesSearchTask}
            onSubmit={handleSubmitSearchTask}>
            {({ isSubmitting }) => (
              <Form className="bg-white flex justify-start items-center px-2 input rounded-2xl h-10 w-8/12">
                <Field
                  className="px-4 w-full focus:outline-none"
                  type="text"
                  name="Name"
                  placeholder="Enter task name"
                />
                {!taskFeteched ? (
                  <button type="submit" disabled={isSubmitting}>
                    <IoSearchCircle className="text-blue-600 h-6 w-6" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default form submission

                      setTaskFeteched(false);
                    }}>
                    <IoCloseCircleSharp className=" text-blue-600 h-6 w-6" />
                  </button>
                )}
              </Form>
            )}
          </Formik>
          <div className="flex">
            {status?.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <input
                  id={`checked-checkbox-${index}`}
                  type="checkbox"
                  checked={
                    (item.id === 4 && filtreDone) ||
                    (item.id === 1 && filtreTodo) ||
                    (item.id === 3 && filtreInreview) ||
                    (item.id === 2 && filtreInprogress) ||
                    (item.id === 5 && filtreCancel)
                  }
                  onChange={
                    item.id === 4
                      ? handleFilterDoneChange
                      : item.id === 1
                      ? handleFilterTodoChange
                      : item.id === 3
                      ? handleFilterInreviewChange
                      : item.id === 2
                      ? handleFilterInprogressChange
                      : handleFilterCancelChange
                  }
                  className="cursor-pointer mx-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
        tasks && tasks.length > 0 ? (
          <div className="">
            {tasks.map((item, index) => (
              <TaskListElement key={index} task={item} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-5 w-full py-2 text-blue-400 flex justify-center items-center border-2 border-dashed">
            No Tasks
          </div>
        )
      ) : null}
      {/* {showBoard ? (
        <div className=" w-full py-2 text-blue-400 flex justify-center items-center  border-b-2 border-x-2 border-dashed">
          your backlog is emptry
        </div>
      ) : null} */}
      {userRole === "prjctBoss" && (
        <div
          onClick={handleShowAddTaskForm}
          className="flex p-4 cursor-pointer hover:text-blue-400 text-blue-600 items-center">
          <IoMdAddCircle className="w-6 h-6" />{" "}
          <span className="mx-2 font-semibold ">Create issue</span>
        </div>
      )}

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
            {createIssueModal && showAddTaskForm ? (
              <AddTaskForm
                parentProject={project}
                handleCachAddTaskForm={handleCachAddTaskForm}
                reloadpage={reloadpage}
                reload={reload}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardMain;
