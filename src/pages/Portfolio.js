import React, { useState } from 'react';
import Project from '../components/Project';
import projectsJson from '../projects.json';

export default function Portfolio() {

    const [projects] = useState(projectsJson);

    return (
        <div>
            <h1>Portfolio</h1>
            <div className="wrapper">
                {projects.map(project => <Project
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    url={project.url}
                />
                )}
            </div>
        </div>
    );
}
