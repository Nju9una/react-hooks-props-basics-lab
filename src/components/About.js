import React from 'react';
import Links from './Links'; // Adjusted import path for Links component

const About = ({ user }) => {
  return (
    <div id="about">
      {user.bio && <p>{user.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" /> {/* Image rendering */}
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
};

export default About;

