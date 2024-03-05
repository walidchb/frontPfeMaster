import React from "react";
import image from '../../images/accueil.jpeg';
import './homepage.css'
import Image from 'next/image';


function SectionOneLandingPage() {
  return (
    <div className="home-page">
      <Image src={image} alt="Task Management App" className="home-page__image" width={500} height={300} />
      <div className="home-page__content">
        <h1 className="home-page__title">Simplify Your Task Management</h1>
        <p className="home-page__description">
          Our task management app helps you stay organized and productive. With a simple and intuitive interface, you can easily manage your tasks, set due dates, and track progress.
        </p>
        <button className="home-page__button">Get Started</button>
      </div>
    </div>
  );
}

export default SectionOneLandingPage;
