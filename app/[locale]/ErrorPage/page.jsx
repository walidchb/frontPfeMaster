import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import React, { Fragment } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function ErrorPage() {
  return (
    <Fragment>
        <NavBar/>
        <div className="flex items-center justify-center h-screen bg-[url('/BG.jpeg')]">
            <div className="text-center">
                <FaExclamationTriangle className="text-yellow-500 w-16 h-16 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Erreur 404</h2>
                <p className="text-lg text-gray-600 mb-4">La page que vous recherchez est introuvable.</p>
                <p className="text-gray-600 mb-4">Veuillez vérifier l'URL ou retourner à la <a href="/" className="text-blue-500">page d'accueil</a>.</p>
            </div>
        </div>
        <Footer />
    </Fragment>
    
  );
}

export default ErrorPage;