import React from 'react';
import '../index.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">Welcome to My Portfolio</h2>
      <p className="home-paragraph">
        Hi, I'm <span className="my-name">Anmol Verma</span>, a passionate Web Developer
      </p>
      <p className="home-paragraph">Explore my projects, skills, and contact me for more information.</p>
    </div>
  );
};

export default Home;