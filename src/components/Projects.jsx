import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';
import '../index.css'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        if (Array.isArray(projectsData)) {
          // Sort projects by year in descending order to show recent projects first
          const sortedProjects = projectsData.sort((a, b) => b.year - a.year);
          setProjects(sortedProjects); // Directly set the sorted projects
        } else {
          setError('Projects data is not an array or missing.');
        }
      } catch (err) {
        setError('Failed to fetch projects.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) return <h2>Loading projects...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <div className="section">
        <h2>Projects</h2>
        <ul>
          {projects.length > 0 ? (
            projects.map((project) => (
              <li key={project._id}>
                <h4>{project.title}</h4>
                <p><strong>Description: </strong>{project.description}</p>
                <p><strong>Year:</strong> {project.year}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </li>
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
