"use client";
import React, {useState} from 'react'
import { Formik } from "formik";
import {FaPlus} from 'react-icons/fa';

const AddProject = () => {
  const [availableTeams, setAvailableTeams] = useState([
    { value: 'team1', label: 'Team 1' },
    { value: 'team2', label: 'Team 2' },
    { value: 'team3', label: 'Team 3' },
    { value: 'team4', label: 'Team 4' },
    { value: 'team5', label: 'Team 5' },
    { value: 'team6', label: 'Team 6' },
    { value: 'team7', label: 'Team 7' },
    { value: 'team8', label: 'Team 8' },
    // Ajoutez d'autres équipes ici
  ]);
  const loginDiv = {
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
  };
  return (
    <div className="bg-white flex items-center justify-center  text-black max-w-screen min-h-screen">
      <div style={loginDiv} className="my-4 w-11/12 flex md:w-8/12 lg:w-5/12 flex-col items-center justify-center bg-white rounded-2xl py-12 md:py-8">
        
       
        <h1 className="flex mb-6 text-2xl"><FaPlus className='mr-4'/>Add Project</h1>
        <Formik
          className="w-full"
          initialValues={{
            projectName: "",
            description: "",
            startDate: "",
            dueDate: "",
            teams: [],
            projectManager: "",
          }}
          validate={(values) => {
            const errors = {};
            // Ajoutez vos règles de validation ici
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            /* and other goodies */
          }) => (
            <form
              className="flex w-11/12 flex-col items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <p className="text-l">Project Name :</p>
                <div className="flex justify-start items-center px-2 border-b border-[#314155] h-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm4.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7-7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    className="px-4 w-full focus:outline-none"
                    type="text"
                    name="projectName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.projectName}
                  />
                </div>
                <p className="mb-4 text-red-500">
                  {errors.projectName && touched.projectName && errors.projectName}
                </p>
              </div>

              <div className="w-full">
                <p className="text-l">Description :</p>
                <div className="flex justify-start items-center px-2 border-b border-[#314155] h-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25c0 1.035.84 1.875 1.875 1.875h13.75c1.035 0 1.875-.84 1.875-1.875V9.075c0-1.035-.84-1.875-1.875-1.875H9.75V4.875C9.75 3.84 8.91 3 7.875 3H3.375zm6 6.75V6h3.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H9.375zm-3.75 0h2.25V6h-2.25V9.75z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <textarea
                    className="px-4 w-full focus:outline-none"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                </div>
                <p className="mb-4 text-red-500">
                  {errors.description && touched.description && errors.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="w-full mr-1">
                  <p className="text-l">Start Date :</p>
                  <div className="flex justify-start items-center px-2 border-b border-[#314155] h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75ZM5.25 6.75c-.621 0-1.125.504-1.125 1.125V18a1.125 1.125 0 0 0 1.125 1.125h13.5A1.125 1.125 0 0 0 19.875 18V7.875c0-.621-.504-1.125-1.125-1.125H5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <input
                      className="px-4 w-full focus:outline-none"
                      type="date"
                      name="startDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.startDate}
                    />
                  </div>
                  <p className="mb-4 text-red-500">
                    {errors.startDate && touched.startDate && errors.startDate}
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-l">Due Date :</p>
                  <div className="flex justify-start items-center px-2 border-b border-[#314155] h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75ZM5.25 6.75c-.621 0-1.125.504-1.1251.125V18a1.125 1.125 0 0 0 1.125 1.125h13.5A1.125 1.125 0 0 0 19.875 18V7.875c0-.621-.504-1.125-1.125-1.125H5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  
                    <input
                      className="px-4 w-full focus:outline-none"
                      type="date"
                      name="dueDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dueDate}
                    />
                  </div>
                  <p className="mb-4 text-red-500">
                    {errors.dueDate && touched.dueDate && errors.dueDate}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-l">Project Manager :</p>
                <div className="flex justify-start items-center px-2 border-b border-[#314155] h-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                
                  <select
                    value={values.projectManager}
                    name="projectManager"
                    className="px-4 w-full focus:outline-none bg-white"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Select a project manager
                    </option>
                    <option value="manager1">Manager 1</option>
                    <option value="manager2">Manager 2</option>
                    {/* Ajoutez d'autres options pour les chefs de projet */}
                  </select>
                </div>
                <p className="mb-4 text-red-500">
                  {errors.projectManager && touched.projectManager && errors.projectManager}
                </p>
              </div>
    
              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      {/* Icône SVG pour représenter une équipe */}
                      <path
                        fillRule="evenodd"
                        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-l">Teams :</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="selectAll"
                      checked={values.teams.length === availableTeams.length}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const newTeams = checked
                          ? availableTeams.map((team) => team.value)
                          : [];
                        setFieldValue('teams', newTeams);
                      }}
                    />
                    <label htmlFor="selectAll" className="ml-2">
                      Select All
                    </label>
                  </div>
                </div>
                <div className="max-h-25 overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {availableTeams.map((team, index) => (
                      <div key={index} className="flex justify-center sm:justify-start items-center">
                        <input
                          type="checkbox"
                          id={`team-${index}`}
                          name="teams"
                          value={team.value}
                          checked={values.teams.includes(team.value)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mr-2"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          {/* Icône SVG pour représenter une équipe */}
                          <path
                            fillRule="evenodd"
                            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <label htmlFor={`team-${index}`} className="ml-2">
                          {team.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-red-500">
                  {errors.teams && touched.teams && errors.teams}
                </p>
              </div>

              {/* Ajoutez d'autres champs comme les membres, la couleur, les pièces jointes, etc. */}
                  
              <button
                className="bg-[#314155] m-auto hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md mt-12 w-1/2 flex items-center justify-center"
                type="submit"
                disabled={isSubmitting}
              >
                Create Project
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddProject
