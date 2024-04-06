import React from 'react';
import { FaUserAlt, FaTimes, FaBuilding, FaSitemap, FaUserFriends, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const EmployeeCard = ({ employee, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full relative">
        <div className="bg-[#314155] h-7 flex items-center justify-between px-4">
          <div></div>
          <button type="button" className="text-white hover:text-gray-300" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center md:flex-row p-4">
          <div className="bg-[#314155] w-32 h-32 flex items-center justify-center md:ml-6 rounded-full md:mb-0 mb-4">
            <FaUserAlt className="text-6xl text-white" />
          </div>
          <div className="md:ml-12 w-full md:w-2/3 md:pl-4 relative text-center md:text-left">
            <h2 className="text-2xl font-semibold font-serif mb-1">{employee.name}</h2>
            <p className="text-gray-500 md:ml-2">Développeur</p>
            <p className="text-gray-500 md:ml-2">ID: 00014A</p>
            <p className="md:absolute right-0 top-0 text-gray-500 font-bold">34 ans</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row py-4 px-6">
          <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
            <div className="flex items-center mb-2 justify-center md:justify-start">
              <FaBuilding className="text-gray-400 mr-2" />
              <p className="text-gray-400 font-semibold">Compagnie</p>
            </div>
            <p className="text-gray-600 text-center md:text-left ml-6">Google</p>
            <div className="flex items-center mt-2 mb-2 justify-center md:justify-start">
              <FaSitemap className="text-gray-400 mr-2" />
              <p className="text-gray-400 font-semibold">Département</p>
            </div>
            <p className="text-gray-600 text-center md:text-left ml-6">Finance</p>
            <div className="flex items-center mt-2 justify-center md:justify-start">
              <FaUserFriends className="text-gray-400 mr-2" />
              <p className="text-gray-400 font-semibold">Équipe</p>
            </div>
            <p className="text-gray-600 text-center md:text-left ml-6">A</p>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4 md:border-l-2 md:border-[#314155]">
            <div className="flex items-center mb-2 justify-center md:justify-start">
              <FaEnvelope className="text-gray-400 mr-2" />
              <p className="text-gray-400 font-semibold">Email</p>
            </div>
            <p className="text-gray-600 text-center md:text-left ml-6">{employee.email || 'example@email.com'}</p>
            <div className="flex items-center mt-2 justify-center md:justify-start">
              <FaPhoneAlt className="text-gray-400 mr-2" />
              <p className="text-gray-400 font-semibold">Phone</p>
            </div>
            <p className="text-gray-600 text-center md:text-left ml-6">{employee.phone || '+1234567890'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;