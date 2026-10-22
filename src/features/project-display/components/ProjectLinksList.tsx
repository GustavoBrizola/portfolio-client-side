import React from 'react';
import type { ProjectLinks } from '../types';

interface ProjectLinksListProps {
    links?: ProjectLinks;
}

export const ProjectLinksList: React.FC<ProjectLinksListProps> = ({ links }) => {
    if (!links) return null;

    return (
        <div style={{ justifyContent: 'center', alignContent: 'end' }}>
            {Object.entries(links).map(([platform, url]) => (
                <a 
                    key={platform} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ marginRight: '10px' }}
                >
                    {platform}
                </a>
            ))}
        </div>
    );
};
