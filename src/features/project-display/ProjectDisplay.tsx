import React from 'react';
import type { Project } from './types';
import { ProjectLinksList } from './components/ProjectLinksList';

interface ProjectDisplayProps {
    project: Project;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ project }) => {
    const {
        title = 'Untitled Project',
        imgSrc = '',
        imgAlt = 'Project Image',
        description = '',
        links = {},
    } = project;

    return (
        <article>
            <div style={{ height: 'fit-content' }}>
                <img src={imgSrc} alt={imgAlt} />
                <h4>{title.substring(0, 50)}</h4>
            </div>
            <p>{description.substring(0, 200)}</p>
            <ProjectLinksList links={links} />
        </article>
    );
};

export default ProjectDisplay;
