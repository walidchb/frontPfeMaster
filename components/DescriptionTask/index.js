"use client";
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaEdit, FaChevronDown, FaChevronUp, FaPaperPlane, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaClipboardList, FaUserFriends, FaExclamationCircle, FaUserCircle, FaTasks, FaClock, FaClipboardCheck } from 'react-icons/fa';

const TaskDetailsPage = ({ task }) => {
  const [comments, setComments] = useState(task.comments);
  const [showTeamMembers, setShowTeamMembers] = useState(false);
  const priorityClass = {
    A: 'bg-red-500 text-white',
    B: 'bg-orange-500 text-white',
    C: 'bg-yellow-500 text-white',
    D: 'bg-green-500 text-white',
  }[task.priority] || 'bg-blue-500 text-white';

  const validationSchema = Yup.object().shape({
    comment: Yup.string().required('Le commentaire est requis'),
  });

  const handleAddComment = (values, { resetForm }) => {
    const newComment = {
      author: 'Vous', // Vous pouvez remplacer 'Vous' par le nom de l'utilisateur authentifié
      date: new Date().toLocaleString(),
      text: values.comment,
    };
    setComments([...comments, newComment]);
    resetForm();
  };

  const handleStatusUpdate = (newStatus) => {
    // Logique pour mettre à jour le statut de la tâche
    console.log('Nouveau statut:', newStatus);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'todo':
        return <FaTasks className="text-gray-500 mr-2" />;
      case 'doing':
        return <FaClock className="text-gray-500 mr-2" />;
      case 'done':
        return <FaClipboardCheck className="text-gray-500 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 relative">
      <span className={`absolute top-4 right-4 px-2 py-1 rounded-full ${priorityClass}`}>
        
        {task.priority}
      </span>

      <div className="flex items-center justify-center mb-4">
        <span className="text-lg font-semibold flex items-center">
          {getStatusIcon(task.status)}
          <span>{task.status}</span>
        </span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{task.title}</h2>
        <div className="flex justify-center mb-4">
          {task.status === 'todo' && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
              onClick={() => handleStatusUpdate('doing')}
            >
              Commencer
            </button>
          )}
          {task.status === 'doing' && (
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md focus:outline-none"
              onClick={() => handleStatusUpdate('done')}
            >
              Terminer
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 grid-auto-rows-min-[100px]">
        <div className="bg-gray-100 rounded-lg p-4 flex items-center">
          <FaUserFriends className="text-3xl text-gray-500 mr-4" />
          <div className="align-self-start">
            <button
              className="flex items-center text-gray-600 font-semibold hover:text-blue-500"
              onClick={() => setShowTeamMembers(!showTeamMembers)}
            >
              Équipe: {task.team.name}
              {showTeamMembers ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            {showTeamMembers && (
              <div>
                {task.team.membres.map((member, index) => (
                  <div key={index} className="flex items-center mt-2">
                    <div className="bg-gray-300 rounded-full p-2 mr-2">
                      <FaUserCircle className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">{member.name}</p>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 flex items-center align-self-start">
          <FaCalendarAlt className="text-3xl text-gray-500 mr-4" />
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Date de début:</span> {task.startDate}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 flex items-center align-self-start">
          <FaCalendarAlt className="text-3xl text-gray-500 mr-4" />
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Date de fin:</span> {task.endDate}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 flex items-center align-self-start">
          <FaClipboardList className="text-3xl text-gray-500 mr-4" />
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Projet:</span> {task.project}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Commentaires</h3>
        <Formik
          initialValues={{ comment: '' }}
          validationSchema={validationSchema}
          onSubmit={handleAddComment}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex items-center mb-4">
                <Field
                  name="comment"
                  type="text"
                  className={`w-full border ${
                    errors.comment && touched.comment ? 'border-red-500' : 'border-gray-300'
                  } rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Ajouter un commentaire"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none"
                >
                  <FaPaperPlane />
                </button>
              </div>
              {errors.comment && touched.comment && (
                <div className="text-red-500 mb-4">{errors.comment}</div>
              )}
            </Form>
          )}
        </Formik>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 rounded-md p-4 mb-2 last:mb-0 flex items-center">
                <div className="bg-gray-300 rounded-full p-2 mr-4">
                  <FaUserCircle className="text-gray-500" />
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">{comment.author} <span className="text-gray-500 font-normal">({comment.date})</span></p>
                  <p className="text-gray-600">{comment.text}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Aucun commentaire pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default TaskDetailsPage;