import routeConfig from "@/app/config/RouteConfig";

interface NavigationTabsInterface {
    id: string | undefined;
    path: string | undefined;
    label: string | undefined;
    icon: null /*ImageBitmap*/ | undefined;
}

type NavigationTabsName = 'home' | 'projects' | 'resume' | 'about' | 'contact';
type NavigationTabs = Record<NavigationTabsName, NavigationTabsInterface>;

// Bussiness Logic
// it holds route's ID and path, but not the elements
// Only access the parents
// label and icon is only avaliable here
const navigationTabs: NavigationTabs = {
    home:       {id: routeConfig.home.id,     path: routeConfig.home.path,      label: '', icon: null,},
    projects:   {id: routeConfig.projects.id, path: routeConfig.projects.path,  label: '', icon: null,},
    resume:     {id: routeConfig.resume.id,   path: routeConfig.resume.path,    label: '', icon: null,},
    about:      {id: routeConfig.about.id,    path: routeConfig.about.path,     label: '', icon: null,},
    contact:    {id: routeConfig.contact.id,  path: routeConfig.contact.path,   label: '', icon: null,},
}

export default navigationTabs;