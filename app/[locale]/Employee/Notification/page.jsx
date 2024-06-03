"use client";
import CalendrierView from "@/components/Calendrier";
import {
  FaTrash,
  FaBell,
  FaTimes,
  FaRegEnvelope,
  FaCalendarAlt,
  FaClipboardList,
  FaTasks,
  FaUserFriends,
  FaChartBar,
} from "react-icons/fa";
import "./style.css";
import ProtectedRoute from "@/components/ProtectedRoute";

import NotificationListElement from "@/components/NotificationListElement";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import React, { useState } from "react";
const Notification = () => {
  const notifications = [
    {
      id: 1,
      date: new Date("2021-12-25T10:30:00"),
      content:
        "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
      type: "project",
      isRead: false,
    },
    {
      id: 2,
      date: new Date("2021-12-20T14:00:00"),
      content: "Meeting Agenda for Monday",
      type: "task",
      isRead: true,
    },
    {
      id: 3,
      date: new Date("2021-12-19T09:15:00"),
      content: "Weekly update from project team",
      type: "reminder",
      isRead: false,
    },
    {
      id: 4,
      date: new Date("2021-12-25T10:30:00"),
      content:
        "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
      type: "message",
      isRead: false,
    },
    {
      id: 1,
      date: new Date("2021-12-25T10:30:00"),
      content:
        "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
      type: "project",
      isRead: false,
    },
    {
      id: 2,
      date: new Date("2021-12-20T14:00:00"),
      content: "Meeting Agenda for Monday",
      type: "task",
      isRead: true,
    },
    {
      id: 3,
      date: new Date("2021-12-19T09:15:00"),
      content: "Weekly update from project team",
      type: "reminder",
      isRead: false,
    },
    {
      id: 4,
      date: new Date("2021-12-25T10:30:00"),
      content:
        "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
      type: "message",
      isRead: false,
    },
    {
      id: 5,
      date: new Date("2021-12-20T14:00:00"),
      content: "Meeting Agenda for Monday",
      type: "event",
      isRead: true,
    },
    {
      id: 6,
      date: new Date("2021-12-19T09:15:00"),
      content: "Weekly update from project team",
      type: "team",
      isRead: false,
    },
    {
      id: 7,
      date: new Date("2021-12-19T09:15:00"),
      content: "Weekly update from project team",
      type: "report",
      isRead: false,
    },
  ];

  const [notificationsList, setNotificationsList] = useState(notifications);

  const handleDeleteNotification = (index) => {
    setNotificationsList(notificationsList.filter((_, i) => i !== index));
  };

  return (
    <div className=" ">
      <NavBarAuth />

      <div
        style={{ height: "90vh" }}
        className="flex flex-col items-center bg-white  overflow-auto costumScrollBar shadow-md  px-4">
        <div className=" w-full text-black text-2xl px-4 my-4  font-semibold">
          Notifications :
        </div>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <NotificationListElement key={index} notification={notification} />
          ))
        ) : (
          <div className="w-full rounded-sm  my-4 py-2 text-gray-00 flex justify-center items-center text-gray-500 border-gray-600  border-2 border-dashed">
            your notifications list is emptry
          </div>
        )}
      </div>
    </div>
  );
};

export default ProtectedRoute(Notification);
