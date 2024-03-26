import React, {useState} from 'react'
import { FaTrash, FaBell, FaTimes, FaRegEnvelope, FaCalendarAlt, FaClipboardList, FaTasks, FaUserFriends, FaChartBar } from 'react-icons/fa'

const UserNotifications = ({ notifications, onDeleteNotification }) => {
    const [notificationToDelete, setNotificationToDelete] = useState(null);
  
    return (
      <div className="flex h-screen">
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <div className="mb-4 text-lg font-semibold">User Notifications</div>
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className="flex items-center p-2 space-x-4 border-b border-gray-200 last:border-b-0 last:border-0"
            >
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FaBell />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center text-sm font-semibold text-gray-800 mb-1">
                  {notification.type === 'message' && <FaRegEnvelope className="mr-2" />}
                  {notification.type === 'event' && <FaCalendarAlt className="mr-2" />}
                  {notification.type === 'reminder' && <FaBell className="mr-2" />}
                  {notification.type === 'project' && <FaClipboardList className="mr-2" />}
                  {notification.type === 'task' && <FaTasks className="mr-2" />}
                  {notification.type === 'team' && <FaUserFriends className="mr-2" />}
                  {notification.type === 'report' && <FaChartBar className="mr-2" />}
                  {notification.type}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                    {new Date(notification.date).toLocaleString()}
                </div>
                <div
                    className={`text-sm ${
                    notification.isRead ? 'text-gray-600' : 'text-gray-800 font-semibold'
                    }`}
                >
                    {notification.content}
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-500 focus:outline-none"
                  onClick={() => setNotificationToDelete(index)}
                >
                  <FaTrash className="mr-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {notificationToDelete !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setNotificationToDelete(null)}
              >
                <FaTimes />
              </button>
              <div className="mb-4 text-lg font-semibold">Confirmation</div>
              <div className="mb-4">
                Êtes-vous sûr de vouloir supprimer cette notification ?
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => setNotificationToDelete(null)}
                >
                  Annuler
                </button>
                <button
                  type="button"
                  className="bg-[#314155] text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600"
                  onClick={() => {
                    onDeleteNotification(notificationToDelete);
                    setNotificationToDelete(null);
                  }}
                >
                  <FaTrash className="mr-1" /> Supprimer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default UserNotifications;
