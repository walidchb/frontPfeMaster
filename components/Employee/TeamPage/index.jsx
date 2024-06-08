import React, { useState, useEffect } from "react";
import "./style.css";
import { IoSearchCircle } from "react-icons/io5";
import axios from "axios";

function TeamPage() {
  const findObjectById = (array, id) => {
    return array.find((obj) => obj.id === id);
  };
  const [team, setTeam] = useState({});
  const [teamId, setTeamId] = useState(null);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userinfo = localStorage.getItem("userInfo");
      const orga = localStorage.getItem("organization");
      if (userinfo && orga) {
        let userJson = JSON.parse(userinfo);

        let orgaJson = JSON.parse(orga);
        const team = userJson?.team.find(
          (obj) => obj.Organization === orgaJson._id
        );
        setTeamId(team?._id);
      }
    }
  }, []);

  useEffect(() => {
    const getTeams = async (values) => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      try {
        const response = await axiosInstance.get("/team/teams", {
          params: {
            _id: teamId,
          },
        });
        console.log("team from database");

        console.log(response.data[0]);
        setTeam(response.data[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getTeams();
  }, [teamId]);
  useEffect(() => {
    const getTeamMembers = async () => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      try {
        const response = await axiosInstance.get("/user/users", {
          params: {
            team: teamId,
          },
        });
        console.log("people");

        console.log(response.data);
        setPeople(response.data);
        // setTeams(response.data);

        // Create an array of false values with the same length as response.data
        // const newShowTeam = new Array(response.data.length).fill(false);
        // setShowTeam(newShowTeam);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getTeamMembers();
  }, [teamId]);

  return (
    <div
      style={{ height: "90vh" }}
      className=" pt-10 lg:px-10 px-4   w-full overflow-auto costumScrollBar">
      <div className="bg-white   ">
        <div className="  w-full  mb-6 pr-4 flex justify-between items-center">
          <h1 className="sm:text-2xl text-xl font-bold    ">{team?.Name} :</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          {team?.Boss ? (
            <div className="bg-gray-800 w-fit h-fit lg:mr-6 mb-4  rounded-lg flex flex-col items-center justify-center py-20 px-4 sm:px-10 ">
              <button className="h-20 w-20 text-3xl relative flex justify-center items-center rounded-full bg-orange-800  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                {team?.Boss?.prenom[0].toUpperCase()}{" "}
                {team?.Boss?.nom[0].toUpperCase()}
              </button>
              <h5 className="mb-1 text-center text-xl font-medium text-gray-900 dark:text-white">
                {team?.Boss?.prenom}
                {team?.Boss?.nom}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Team Leader
              </span>
              <div className="text-white">{team?.Boss?.email}</div>
            </div>
          ) : null}

          <ul
            style={{ height: "73vh" }}
            role="list"
            className="w-full overflow-auto costumScrollBar grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <button className="h-10 w-10 relative flex justify-center items-center rounded-full bg-orange-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    {person?.prenom[0].toUpperCase()}{" "}
                    {person?.nom[0].toUpperCase()}
                  </button>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person?.prenom}
                      {person?.nom}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person?.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
