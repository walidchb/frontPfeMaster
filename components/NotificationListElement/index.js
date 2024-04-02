"use client";
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
import React, { useState, useEffect } from "react";
import "./style.css";

function NotificationListElement({ notification }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [notificationToDelete, setNotificationToDelete] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      key={notification.id}
      className="NotificationListElement  w-full  my-2 rounded-xl flex justify-between items-center p-2   border-gray-200 last:border-b-0 last:border-0">
      <div className="flex ">
        <div
          style={{
            minWidth:
              windowSize.width <= 450
                ? "20vw"
                : windowSize.width <= 650
                ? "15vw"
                : windowSize.width <= 850
                ? "12vw"
                : "8vw",
          }}
          className="  flex flex-col justify-center  items-center text-sm font-semibold text-gray-800 ">
          {notification.type === "message" && <FaRegEnvelope className="" />}
          {notification.type === "event" && <FaCalendarAlt className="" />}
          {notification.type === "reminder" && <FaBell className="" />}
          {notification.type === "project" && <FaClipboardList className="" />}
          {notification.type === "task" && <FaTasks className="" />}
          {notification.type === "team" && <FaUserFriends className="" />}
          {notification.type === "report" && <FaChartBar className="" />}
          {notification.type}
        </div>
        <div style={{ width: "50vw" }} className="">
          <div className="truncate text-sm text-gray-600 mb-2">
            {new Date(notification.date).toLocaleString()}
          </div>
          <div
            className={`truncate    text-sm ${
              notification.isRead
                ? "text-gray-600"
                : "text-gray-800 font-semibold"
            }`}>
            {notification.content}
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <button
          type="button"
          className="text-gray-600  hover:text-blue-500 focus:outline-none "
          onClick={() => setNotificationToDelete(1)}>
          <FaTrash className="mr-1" />
        </button>
      </div>

      {notificationToDelete == 1 && (
        <div className="text-white fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 relative">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => setNotificationToDelete(2)}>
              <FaTimes color="white" />
            </button>
            <div className="mb-4 text-lg font-semibold">Confirmation</div>
            <div className="mb-4">
              Êtes-vous sûr de vouloir supprimer cette notification ?
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setNotificationToDelete(2)}>
                Annuler
              </button>
              <button
                type="button"
                className="bg-[#fc4545] text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600"
                onClick={() => {
                  onDeleteNotification(notificationToDelete);
                  setNotificationToDelete(null);
                }}>
                <FaTrash className="mr-1" /> Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationListElement;
