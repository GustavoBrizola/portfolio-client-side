import routeConfig from "@/app/config/RouteConfig";

import HomeIcon from '@/assets/icons/ui/home_white.svg';
import ProjectsIcon from '@/assets/icons/ui/projects_white.svg';
import ResumeIcon from '@/assets/icons/ui/resume_white.svg';
import AboutIcon from '@/assets/icons/ui/info_white.svg';
import ContactIcon from '@/assets/icons/ui/contact_white.svg';

interface NavigationTabsInterface {
    id: string | undefined;
    path: string | undefined;
    label: string | undefined;
    icon: string | undefined;
}

type NavigationTabsName = [
    'home', 
    'projects', 
    'resume', 
    'about',
];
type NavigationTabs = Record<NavigationTabsName[number], NavigationTabsInterface>;

// Bussiness Logic
// it holds route's ID and path, but not the elements
// Only access the parents
// label and icon is only avaliable here
const navigationTabs: NavigationTabs = {
    home:       {id: routeConfig.home.id,     path: routeConfig.home.path,      label: 'Home',      icon: HomeIcon,},
    projects:   {id: routeConfig.projects.id, path: routeConfig.projects.path,  label: 'Projects',  icon: ProjectsIcon,},
    resume:     {id: routeConfig.resume.id,   path: routeConfig.resume.path,    label: 'Resume',    icon: ResumeIcon,},
    about:      {id: routeConfig.about.id,    path: routeConfig.about.path,     label: 'About',     icon: AboutIcon,},
}

export default navigationTabs;