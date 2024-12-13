import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../services/api';
import '../index.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const skillsData = await fetchSkills();
        if (Array.isArray(skillsData)) {
          setSkills(skillsData);
        } else {
          setError('Skills data is missing.');
        }
      } catch (err) {
        setError('Failed to fetch skills.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getSkills();
  }, []);

  if (loading) return <h2>Loading skills...</h2>;
  if (error) return <h2>{error}</h2>;

  // Reverse the skills to show the most recent ones first
  const sortedSkills = skills.slice().reverse();

  return (
    <div className="container">
      <div className="section">
        <h2>Skills</h2>
        <ul>
          {sortedSkills.length > 0 ? (
            sortedSkills.map((skill) => (
              <li key={skill._id}>
                <h4>{skill.name}</h4>
                <p><strong>Proficiency:</strong> {skill.proficiency}</p>
                <p><strong>Category:</strong> {skill.category}</p>
                <p><strong>Years Of Experience:</strong> {skill.yearsOfExperience}</p>
              </li>
            ))
          ) : (
            <p>No skills available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
