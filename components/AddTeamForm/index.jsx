"use client";
import React from 'react';
import { Formik } from "formik";
import {FaPlus} from 'react-icons/fa';

const AddTeam = ({ parentDepartement }) => {
    const loginDiv = {
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
      };
    
  return (
        <div className="bg-white flex items-center justify-center text-black max-w-screen min-h-screen">
            <div style={loginDiv} className="my-4 w-11/12 flex md:w-8/12 lg:w-5/12 flex-col items-center justify-center bg-white rounded-2xl py-12 md:py-8">
            
                <h1 className="flex mb-6 text-2xl"><FaPlus className='mr-4'/>Add Team</h1>
                <Formik
                className="w-full"
                initialValues={{
                    TeamName: "",
                    description: "",
                    TeamManager: "",
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
                    /* and other goodies */
                }) => (
                    <form
                    className="flex w-11/12 flex-col items-center justify-center"
                    onSubmit={handleSubmit}
                    >
                        <div className="w-full">
                            <p className="text-l">Team Name :</p>
                            <div className="flex justify-start items-center px-2 border-b border-[#314155] h-10">
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

                                <input
                                    className="px-4 w-full focus:outline-none"
                                    type="text"
                                    name="TeamName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.TeamName}
                                />
                            </div>
                            <p className="mb-4 text-red-500">
                                {errors.TeamName && touched.TeamName && errors.TeamName}
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
                            <p className="text-l">Team Manager :</p>
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
                                value={values.TeamManager}
                                name="TeamManager"
                                className="px-4 w-full focus:outline-none bg-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                >
                                <option value="" disabled>
                                    Select a Team manager
                                </option>
                                <option value="manager1">Manager 1</option>
                                <option value="manager2">Manager 2</option>
                                {/* Ajoutez d'autres options pour les chefs d'équipe */}
                            </select>
                            </div>
                            <p className="mb-4 text-red-500">
                            {errors.TeamManager && touched.TeamManager && errors.TeamManager}
                            </p>
                        </div>

                        <button
                            className="bg-[#314155] m-auto hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md mt-12 w-1/2 flex items-center justify-center"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Create Team
                        </button>
                    </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AddTeam;