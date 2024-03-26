"use client"
import CalendrierView from '@/components/Calendrier';
import UserNotifications from '@/components/UserNotifications';
import React, { useState } from "react";
const Notification = () => {
    const notifications = [
        {
          id: 1,
          date: new Date("2021-12-25T10:30:00"),
          content: "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
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
          content: "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
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
        <div className="container mx-auto">
          <UserNotifications
            notifications={notificationsList}
            onDeleteNotification={handleDeleteNotification}
          />
        </div>
      );
}

export default Notification
