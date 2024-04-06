"use client";
import React from "react";
import { FaMapMarkedAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import "./style.css";
import NavBar from "@/components/NavBar";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import AddProject from "@/components/AddProjectForm";
import AddTask from "@/components/AddTaskForm";
import AddDepartement from "@/components/AddDepartementForm";
import AddTeam from "@/components/AddTeamForm";

function Contact() {
  return (
    <AddTeam />
  );
}

export default Contact;
