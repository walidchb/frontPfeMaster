import React, { useState } from "react";
import "./style.css";
import { IoSearchCircle } from "react-icons/io5";
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
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdAddCircle,
} from "react-icons/io";
function TeamsPage() {
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
  const [teamLead, setTeamLead] = useState(true);
  const [showTeam, setShowTeam] = useState([
    false,
    false,
    false,
    true,
    false,
    false,
  ]);
  const [teams, setTeams] = useState([1, 2, 3, 4, 5, 6]);
  const [showInvitePeopleModal, setShowInvitePeopleModal] = useState(false);
  return (
    <div
      style={{ height: "90vh" }}
      className=" pt-10 lg:px-10 px-4   w-full overflow-auto costumScrollBar">
      <div className=" mb-10 w-full  flex justify-between items-center">
        <h1 className="text-2xl     ">
          Your teams :
          {/* &nbsp;&nbsp; &#x276F; &nbsp;&nbsp; departement &nbsp;&nbsp;
          &#x276F; &nbsp;&nbsp; project Name{" "} */}
        </h1>
        <div
          // onClick={() => setCreateIssueModal(true)}
          className="flex p-4 cursor-pointer hover:text-blue-400 text-blue-600 items-center">
          <IoMdAddCircle className="w-6 h-6" />{" "}
          <span className="mx-2 font-semibold ">Create new Team</span>
        </div>
      </div>
      {teams.length > 0 ? (
        teams.map((team, index) => (
          <div className="bg-white   " key={index}>
            <div className="  w-full  mb-6 pr-4 flex justify-between items-center">
              <span
                onClick={() => {
                  // Create a copy of the state to avoid mutation
                  const updatedShowTeam = [...showTeam];

                  // Toggle the clicked element's state
                  updatedShowTeam[index] = !updatedShowTeam[index];

                  // Update the state using the setter function
                  setShowTeam(updatedShowTeam);
                }}
                className="cursor-pointer w-fit flex font-bold text-xl  items-center">
                {showTeam[index] ? (
                  <IoMdArrowDropdown className=" h-6 w-6" />
                ) : (
                  <IoMdArrowDropright className=" h-6 w-6" />
                )}{" "}
                Team (A) : &nbsp;{" "}
                {/* <span className="text-gray-400 font-normal text-sm">
              (50 issues)
            </span>{" "} */}
              </span>
              {/* <h1 className="sm:text-2xl text-xl font-bold    ">Team (A) :</h1> */}
              {showTeam[index] ? (
                <button
                  onClick={() => {
                    //   setShowAddProjectFrom(false);
                    setShowInvitePeopleModal(true);
                  }}
                  className="text-2xl underline text-blue-600 hover:no-underline">
                  Invite People
                </button>
              ) : teamLead ? (
                <button className="ml-2 h-8 w-8 relative flex justify-center items-center rounded-full bg-orange-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  WC
                </button>
              ) : (
                <FaUserCircle className=" rounded-full w-10 h-10 mr-2" />
              )}
            </div>
            {showTeam[index] ? (
              <div className="flex flex-col lg:flex-row justify-center items-center">
                {teamLead ? (
                  <div className="bg-gray-800 w-fit h-fit lg:mr-6 mb-4  rounded-lg flex flex-col items-center justify-center py-20 px-4 sm:px-10 ">
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
                ) : null}

                <ul
                  style={{ height: "73vh" }}
                  role="list"
                  className=" mb-8 w-full overflow-auto costumScrollBar grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="flex items-center gap-x-6 ">
                        <img
                          className="h-16 w-16 rounded-full"
                          src={person.imageUrl}
                          alt=""
                        />
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            {person.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">
                            {person.role}
                          </p>
                          {!teamLead ? (
                            <button
                              className="px-2 py-1 
                           rounded-md font-medium bg-green-400 text-center text-white shadow-sm flex justify-between">
                              <img
                                src="/images/leader.png"
                                className="h-6 w-6 mr-2"
                                alt=""
                                srcset=""
                              />
                              <span>Make it Boss</span>
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div className="w-full rounded-sm  my-4 py-2 text-gray-00 flex justify-center items-center text-gray-500 border-gray-600  border-2 border-dashed">
          your teams list is emptry
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
          showInvitePeopleModal ? "opacity-100 visible" : "opacity-0 invisible"
        } `}>
        <div className="w-[90vw]  md:w-[60vw] h-[90vh] myShadow relative mx-auto overflow-hidden   rounded-lg shadow-md bg-white">
          <div
            style={{ height: "10vh" }}
            className="flex justify-end items-center px-5 ">
            <button
              type="button"
              onClick={() => setShowInvitePeopleModal(false)}
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
            style={{ height: "80vh" }}
            className=" flex flex-col justify-start items-center ">
            <h1 className="text-4xl font-bold py-6">Team A</h1>

            <h1 className="text-3xl pb-6">Invite people to your team</h1>
            <div className="w-10/12">
              <div className="bg-white flex justify-start items-center px-2 input rounded-2xl h-10 ">
                <input
                  className="px-4 w-full focus:outline-none"
                  type="text"
                  name="taskName"
                  placeholder="Search"
                />
                <button type="submit">
                  <IoSearchCircle className=" text-blue-600 h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="w-11/12 h-[50vh] overflow-auto costumScrollBar">
              {people.map((person) => (
                <div className="border-b-2 border-gray-400   w-full  my-2 rounded-xl flex justify-between items-center p-2    ">
                  <div className="flex ">
                    <div className="  flex flex-col justify-center  items-center text-sm font-semibold text-gray-800 ">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className=" flex flex-col justify-center ml-4">
                      <div className="truncate  text-sm text-gray-600 ">
                        walid chebbab
                      </div>
                      <div
                        className={`truncate  text-gray-800 font-semibold  text-sm `}>
                        Walidchebbab2001@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-center items-center">
                    <button
                      type="button"
                      className="text-gray-600  hover:text-blue-500 focus:outline-none "
                      // onClick={() => setNotificationToDelete(1)}
                    >
                      {/* <FaTrash className="mr-1" /> */}
                      send
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
