"use client";
import React from 'react';
import { Formik } from "formik";
import {FaPlus} from 'react-icons/fa';

const AddDepartement = ({ parentOrganisation }) => {
    const loginDiv = {
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
      };
    
  return (
        <div className="bg-white flex items-center justify-center text-black max-w-screen min-h-screen">
            <div style={loginDiv} className="my-4 w-11/12 flex md:w-8/12 lg:w-5/12 flex-col items-center justify-center bg-white rounded-2xl py-12 md:py-8">
            
                <h1 className="flex mb-6 text-2xl"><FaPlus className='mr-4'/>Add Departement</h1>
                <Formik
                className="w-full"
                initialValues={{
                    DepartementName: "",
                    description: "",
                    DepartementManager: "",
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
                            <p className="text-l">Departement Name :</p>
                            <div className="flex justify-start items-center px-2 border-b border-[#314155] h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path
                                    fillRule="evenodd"
                                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm6.5 7.5a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3zm5.25-.75a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z"
                                    clipRule="evenodd"
                                    />
                                </svg>

                                <input
                                    className="px-4 w-full focus:outline-none"
                                    type="text"
                                    name="DepartementName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.DepartementName}
                                />
                            </div>
                            <p className="mb-4 text-red-500">
                                {errors.DepartementName && touched.DepartementName && errors.DepartementName}
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
                            <p className="text-l">Departement Manager :</p>
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
                                value={values.DepartementManager}
                                name="DepartementManager"
                                className="px-4 w-full focus:outline-none bg-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                >
                                <option value="" disabled>
                                    Select a Departement manager
                                </option>
                                <option value="manager1">Manager 1</option>
                                <option value="manager2">Manager 2</option>
                                {/* Ajoutez d'autres options pour les chefs de departement */}
                            </select>
                            </div>
                            <p className="mb-4 text-red-500">
                            {errors.DepartementManager && touched.DepartementManager && errors.DepartementManager}
                            </p>
                        </div>

                        <button
                            className="bg-[#314155] m-auto hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md mt-12 w-1/2 flex items-center justify-center"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Create Departement
                        </button>
                    </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AddDepartement;