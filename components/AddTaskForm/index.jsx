"use client";
import React, {useState} from 'react';
import { Formik } from "formik";
import {FaPlus} from 'react-icons/fa';

const AddTask = ({ parentProject }) => {
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
        <div className="bg-white flex items-center justify-center text-black max-w-screen min-h-screen">
            <div style={loginDiv} className="my-4 w-11/12 flex md:w-8/12 lg:w-5/12 flex-col items-center justify-center bg-white rounded-2xl py-12 md:py-8">
            
                <h1 className="flex mb-6 text-2xl"><FaPlus className='mr-4'/>Add Task</h1>
                <Formik
                className="w-full"
                initialValues={{
                    taskName: "",
                    description: "",
                    dueDate: "",
                    priority: "",
                    assignedTo: [],
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
                            <p className="text-l">Task Name :</p>
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
                                    name="taskName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.taskName}
                                />
                            </div>
                            <p className="mb-4 text-red-500">
                                {errors.taskName && touched.taskName && errors.taskName}
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
                                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75ZM5.25 6.75c-.621 0-1.125.504-1.125 1.125V18a1.125 1.125 0 0 0 1.125 1.125h13.5A1.125 1.125 0 0 0 19.875 18V7.875c0-.621-.504-1.125-1.125-1.125H5.25Z"
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

                        <div className="w-full">
                            <p className="text-l">Priority :</p>
                            <div className="flex justify-start items-center px-2 border-b border-[#314155] h-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                <select
                                    value={values.priority}
                                    name="priority"
                                    className="px-4 w-full focus:outline-none bg-white"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="" disabled>
                                        Select a priority
                                    </option>
                                    <option value="A">A : must do</option>
                                    <option value="B">B : should do</option>
                                    <option value="C">C : nice to do</option>
                                    <option value="D">D : to delegate</option>
                                    <option value="E">E : eliminate</option>
                                </select>
                            </div>
                            <p className="mb-4 text-red-500">
                                {errors.priority && touched.priority && errors.priority}
                            </p>
                        </div>

                        <div className="w-full">
                            <p className="text-l">Assigned Team :</p>
                            <div className="flex justify-start items-center px-2 border-b border-[#314155] h-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 mr-2"
                                >
                                    {/* Icône SVG pour représenter une équipe */}
                                    <path
                                        fillRule="evenodd"
                                        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                <select
                                    value={values.assignedTo}
                                    name="assignedTo"
                                    className="px-4 w-full focus:outline-none bg-white"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="" disabled>
                                        Select a team
                                    </option>
                                    {availableTeams.map((team, index) => (
                                        <option key={index} value={team.value}>
                                        {team.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p className="mb-4 text-red-500">
                                {errors.assignedTo && touched.assignedTo && errors.assignedTo}
                            </p>
                        </div>

                        <button
                            className="bg-[#314155] m-auto hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md mt-12 w-1/2 flex items-center justify-center"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Create Task
                        </button>
                    </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AddTask;