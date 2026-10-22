export interface ProjectLinks {
    [platform: string]: string;
}

export interface Project {
    title: string;
    imgSrc: string;
    imgAlt?: string;
    description: string;
    links?: ProjectLinks;
}
