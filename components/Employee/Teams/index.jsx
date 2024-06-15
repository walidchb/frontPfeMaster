import React, { useState, useEffect } from "react";
import "./style.css";
import {
  IoSearchCircle,
  IoAddCircleSharp,
  IoCloseCircleSharp,
} from "react-icons/io5";

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
import { GrValidate } from "react-icons/gr";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdAddCircle,
} from "react-icons/io";

function TeamsPage() {
  const [allPeople, setAllPeople] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  const [personFetched, setPersonFetched] = useState(false);
  const [organization, setOrganization] = useState({}); // State to trigger rerender
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const orga = localStorage.getItem("organization");
      const userinfo = localStorage.getItem("userInfo");
      console.log("orgaJson");

      console.log(orga);
      console.log("user local storage");

      console.log(userinfo);

      if (orga) {
        let orgaJson = JSON.parse(orga);
        console.log("orgaJson");

        console.log(orgaJson);
        setOrganization(orgaJson);
        let userJson = JSON.parse(userinfo);
        setUserInfo(userJson);
      }
    }
  }, []);
  const [reload, setReload] = useState(false); // State to trigger rerender
  const [invitaions, setInvitaions] = useState([]);
  // get invitations
  useEffect(() => {
    const getinvitations = async (values) => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const organization = JSON.parse(localStorage.getItem("organization"));
      try {
        const response = await axiosInstance.get("/invitation/invitations", {
          params: {
            organisation: organization?._id,
          },
        });
        console.log("invitaions");

        console.log(response.data);
        setInvitaions(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getinvitations();
  }, []);
  useEffect(() => {
    const getinvitations = async (values) => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const organization = JSON.parse(localStorage.getItem("organization"));
      try {
        const response = await axiosInstance.get("/invitation/invitations", {
          params: {
            organisation: organization?._id,
          },
        });
        console.log("invitaions");

        console.log(response.data);
        setInvitaions(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getinvitations();
  }, [reload]);

  //  get jsp
  useEffect(() => {
    const getTeams = async (values) => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const organization = JSON.parse(localStorage.getItem("organization"));
      if (userInfo?.role === "orgBoss") {
        try {
          const response = await axiosInstance.get("/team/teams", {
            params: {
              Organization: organization?._id,
            },
          });
          console.log("teams from orgboss");

          console.log(response.data);
          setTeams(response.data);

          // Create an array of false values with the same length as response.data
          const newShowTeam = new Array(response.data.length).fill(false);
          setShowTeam(newShowTeam);
        } catch (error) {
          console.error("Error:", error);
        }
      } else if (userInfo?.role === "prjctBoss") {
        try {
          const response = await axiosInstance.get("/team/teamsByBoss", {
            params: {
              projectBossId: userInfo?._id,
            },
          });
          console.log("teams");

          console.log(response.data);
          setTeams(response.data);

          // Create an array of false values with the same length as response.data
          const newShowTeam = new Array(response.data.length).fill(false);
          setShowTeam(newShowTeam);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    getTeams();
  }, [userInfo, organization, reload]);
  // useEffect(() => {
  //   const getTeams = async (values) => {
  //     const axiosInstance = axios.create({
  //       baseURL: "http://localhost:1937",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const organization = JSON.parse(localStorage.getItem("organization"));
  //     if (userInfo?.role === "orgBoss") {
  //       try {
  //         const response = await axiosInstance.get("/team/teams", {
  //           params: {
  //             Organization: organization?._id,
  //           },
  //         });
  //         console.log("teams");

  //         console.log(response.data);
  //         setTeams(response.data);

  //         // Create an array of false values with the same length as response.data
  //         const newShowTeam = new Array(response.data.length).fill(false);
  //         setShowTeam(newShowTeam);
  //       } catch (error) {
  //         console.error("Error:", error);
  //       }
  //     } else {
  //       try {
  //         const response = await axiosInstance.get("/team/teamsByBoss", {
  //           params: {
  //             projectBossId: userInfo?._id,
  //           },
  //         });
  //         console.log("teams");

  //         console.log(response.data);
  //         setTeams(response.data);

  //         // Create an array of false values with the same length as response.data
  //         const newShowTeam = new Array(response.data.length).fill(false);
  //         setShowTeam(newShowTeam);
  //       } catch (error) {
  //         console.error("Error:", error);
  //       }
  //     }
  //   };

  //   getTeams();
  // }, [reload]);
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
  useEffect(() => {
    const getPeople = async (values) => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const roles = ["employee", "teamBoss", "individual"];
      // Join the roles array to form a string separated by commas
      const roleQueryParam = roles.join(",");
      try {
        const response = await axiosInstance.get("/user/users", {
          params: {
            roles: roleQueryParam,
          },
        });
        console.log("people");

        console.log(response.data);
        setAllPeople(response.data);
        // setTeams(response.data);

        // Create an array of false values with the same length as response.data
        // const newShowTeam = new Array(response.data.length).fill(false);
        // setShowTeam(newShowTeam);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getPeople();
  }, []);
  useEffect(() => {
    const getPeople = async (values) => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const roles = ["employee", "teamBoss", "individual"];
      // Join the roles array to form a string separated by commas
      const roleQueryParam = roles.join(",");
      try {
        const response = await axiosInstance.get("/user/users", {
          params: {
            roles: roleQueryParam,
          },
        });
        console.log("people");

        console.log(response.data);
        setAllPeople(response.data);
        // setTeams(response.data);

        // Create an array of false values with the same length as response.data
        // const newShowTeam = new Array(response.data.length).fill(false);
        // setShowTeam(newShowTeam);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getPeople();
  }, [personFetched]);

  const [teamLead, setTeamLead] = useState(true);
  const [showTeam, setShowTeam] = useState([]);
  const [team, setTeam] = useState({});

  const [teams, setTeams] = useState([]);
  const [showInvitePeopleModal, setShowInvitePeopleModal] = useState(false);
  const [showCreateNewTeam, setShowCreateNewTeam] = useState(false);
  const initialValues = { teamName: "" };
  function invitationSent(array, value) {
    return array.some((item) => item.sendto._id === value);
  }
  const handleSubmit = async (values, { setSubmitting }) => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:1937",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      const response = await axiosInstance.post("/team/teams", {
        Name: values.teamName,
        OrganizationId: organization?._id,
      });
      console.log("team created");
      setShowCreateNewTeam(false);
      console.log(response.data);
      setReload(!reload);
      // window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };

  const initialValuesSearchPerson = { email: "" };
  const handleSubmitSearchPerson = async (values, { setSubmitting }) => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:1937",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      const response = await axiosInstance.get("/user/users", {
        params: {
          email: values.email,
        },
      });
      // console.log("team created");
      setAllPeople(response.data);
      setPersonFetched(true);
      console.log(response.data);
      // setReload(!reload);
      // window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };

  const sendInvitaion = async (person) => {
    console.log(organization);
    const axiosInstance = axios.create({
      baseURL: "http://localhost:1937",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      const response = await axiosInstance.post("/invitation/invitations", {
        sendby: organization?.Boss?._id,
        sendto: person._id,
        roleinvitedto: "employee",
        team: team._id,
        organisation: organization?._id,
        accepted: false,
      });

      console.log(response.data);
      setReload(!reload);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // team members fetch

  useEffect(() => {
    const getinvitations = async (values) => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      try {
        const response = await axiosInstance.get("/user/users", {
          params: {
            team: team?._id,
          },
        });
        console.log("people");

        console.log(response.data);
        setTeamMembers(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getinvitations();
  }, [team]);

  const makeUserTeamBoss = async (team, person) => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:1937",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(0);

    try {
      console.log(1);
      const response = await axiosInstance.patch(
        `/user/users?id=${person?._id}`,
        {
          role: "teamBoss",
        }
      );
      console.log("user updated successfuly");

      try {
        console.log(1);
        const response = await axiosInstance.patch(
          `/team/teams?id=${team?._id}`,
          {
            Boss: person?._id,
          }
        );

        console.log("team updated successfuly");
        setReload(!reload);
      } catch (error) {
        console.log(4);

        console.error(
          "Error updating team:",
          error.response?.data || error.message
        );
      }
    } catch (error) {
      console.log(4);

      console.error(
        "Error updating user:",
        error.response?.data || error.message
      );
    }
  };
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
          onClick={() => setShowCreateNewTeam(true)}
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
                  // const updatedShowTeam = [...showTeam];
                  const updatedShowTeam = showTeam.map(
                    (value, idx) => idx === index
                  );

                  // Update the state using the setter function
                  setShowTeam(updatedShowTeam);
                  // Toggle the clicked element's state
                  // updatedShowTeam[index] = !updatedShowTeam[index];
                  setTeam(team);
                  // Update the state using the setter function
                  // setShowTeam(updatedShowTeam);
                }}
                className="cursor-pointer w-fit flex font-bold text-xl  items-center">
                {showTeam[index] ? (
                  <IoMdArrowDropdown className=" h-6 w-6" />
                ) : (
                  <IoMdArrowDropright className=" h-6 w-6" />
                )}{" "}
                {team.Name} : &nbsp;{" "}
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
              ) : team.Boss ? (
                <button className="h-8 w-8 relative flex justify-center items-center rounded-full bg-orange-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  {team.Boss.prenom[0].toUpperCase()}{" "}
                  {team.Boss.nom[0].toUpperCase()}
                </button>
              ) : (
                <FaUserCircle className=" rounded-full w-8 h-8 mr-2" />
              )}
            </div>
            {showTeam[index] ? (
              <div className="flex flex-col lg:flex-row justify-center items-center">
                {team.Boss ? (
                  <div className="bg-gray-800 w-fit h-fit lg:mr-6 mb-4  rounded-lg flex flex-col items-center justify-center py-20 px-4 sm:px-10 ">
                    <button className="my-2 text-2xl h-14 w-14 relative flex justify-center items-center rounded-full bg-orange-800  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      {team.Boss.prenom[0].toUpperCase()}{" "}
                      {team.Boss.nom[0].toUpperCase()}
                    </button>
                    <h5 className="mb-1 text-xl font-medium text-center text-gray-900 dark:text-white">
                      {team.Boss.prenom} {team.Boss.nom}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Team Leader
                    </span>
                    <div className="text-white">{team.Boss.email}</div>
                  </div>
                ) : null}

                <ul
                  style={{ maxHeight: "73vh" }}
                  role="list"
                  className=" mb-8 w-full overflow-auto costumScrollBar grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                  {teamMembers.length > 0 ? (
                    teamMembers.map((person, index) => (
                      <li key={index}>
                        <div className="flex items-center gap-x-6 ">
                          <button className="h-10 w-10 text-xl mr-2 relative flex justify-center items-center rounded-full bg-orange-800  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            {person?.prenom[0].toUpperCase()}
                            {person?.nom[0].toUpperCase()}
                          </button>
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                              {person?.prenom} {person?.nom}
                            </h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">
                              {person?.email}
                            </p>
                            {!team.Boss ? (
                              <button
                                onClick={() => makeUserTeamBoss(team, person)}
                                className="px-2 py-1 
                           rounded-md font-medium bg-green-400 text-center text-white shadow-sm flex justify-between">
                                <img
                                  src="/images/leader.png"
                                  className="h-6 w-6 mr-2"
                                  alt=""
                                  // srcset=""
                                />
                                <span>Make it Boss</span>
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <div className="w-full  my-2 py-2 text-gray-00 flex justify-center items-center border-gray-600 border-2 border-dashed">
                      there are no members in this team yet{" "}
                    </div>
                  )}
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

      {/* invite people */}
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
              <Formik
                initialValues={initialValuesSearchPerson}
                onSubmit={handleSubmitSearchPerson}>
                {({ isSubmitting }) => (
                  <Form className="bg-white flex justify-start items-center px-2 input rounded-2xl h-10">
                    <Field
                      className="px-4 w-full focus:outline-none"
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                    {!personFetched ? (
                      <button type="submit" disabled={isSubmitting}>
                        <IoSearchCircle className="text-blue-600 h-6 w-6" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default form submission
                          setPersonFetched(false);
                        }}>
                        <IoCloseCircleSharp className=" text-blue-600 h-6 w-6" />
                      </button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>

            <div className="w-11/12 h-[50vh] overflow-auto costumScrollBar">
              {allPeople.length > 0 ? (
                allPeople.map((person, index) => (
                  <div
                    key={index}
                    className="border-b-2 border-gray-400   w-full  my-2 rounded-xl flex justify-between items-center p-2    ">
                    <div className="flex ">
                      <div className="  flex flex-col justify-center  items-center text-sm font-semibold text-gray-800 ">
                        <button className="h-8 w-8 relative flex justify-center items-center rounded-full bg-orange-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          {person.prenom[0].toUpperCase()}{" "}
                          {person.nom[0].toUpperCase()}
                        </button>
                      </div>
                      <div className=" flex flex-col justify-center ml-4">
                        <div className="truncate  text-sm text-gray-600 ">
                          {person.prenom} {person.nom}
                        </div>
                        <div
                          className={`truncate  text-gray-800 font-semibold  text-sm `}>
                          {person.email}{" "}
                        </div>
                      </div>
                    </div>

                    <div className=" flex justify-center items-center">
                      {!invitationSent(invitaions, person._id) ? (
                        <button
                          type="button"
                          className="text-gray-600  hover:text-blue-500 focus:outline-none "
                          onClick={() => sendInvitaion(person)}>
                          {/* <FaTrash className="mr-1" /> */}
                          send
                        </button>
                      ) : (
                        <GrValidate className="mr-1 h-6 w-6 text-green-500" />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full rounded-sm  my-4 py-2 text-gray-00 flex justify-center items-center text-gray-500 border-gray-600  border-2 border-dashed">
                  your people list is emptry
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* create team */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
        className={` fixed inset-0 z-50  overflow-y-auto justify-center items-center flex     ${
          showCreateNewTeam ? "opacity-100 visible" : "opacity-0 invisible"
        } `}>
        <div className="w-[90vw]  md:w-[60vw] h-[40vh] myShadow relative mx-auto overflow-hidden   rounded-lg shadow-md bg-white">
          <div
            style={{ height: "10vh" }}
            className="flex justify-end items-center px-5 ">
            <button
              type="button"
              onClick={() => setShowCreateNewTeam(false)}
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
            {/* <h1 className="text-4xl font-bold py-6">Team A</h1> */}

            <h1 className="text-3xl pb-6">Create New Team</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="bg-white flex justify-start items-center px-2 input rounded-2xl h-10">
                  <Field
                    className="px-4 w-full focus:outline-none"
                    type="text"
                    name="teamName"
                    placeholder="Team Name"
                  />
                  <button type="submit" disabled={isSubmitting}>
                    <IoAddCircleSharp className="text-blue-600 h-6 w-6" />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
