// Here lies all routes that can exist
// Route.ts then enables to access
// The reason why has file separation is organization purposes
const routeConfig = {
    home:       { id: 'home',       path: '/home' },
    projects:   { id: 'projects',   path: '/projects' },
    resume:     { id: 'resume',     path: '/resume' },
    about:      { id: 'about',      path: '/about' },
    contact:    { id: 'contact',    path: '/contact' },
} as const;

export default routeConfig;