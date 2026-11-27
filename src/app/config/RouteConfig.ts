// Here lies all routes that can exist
// Route.ts then enables to access
// The reason why has file separation is organization purposes
const routeConfig = {
    home:       { id: 'home',       path: '/home' },
    projects:   { id: 'projects',   path: '/projects' },
    resume:     { id: 'resume',     path: '/resume' },
    contact:    { id: 'contact',    path: '/contact' },
    profile:    { id: 'profile',      path: '/profile' },
} as const;

export default routeConfig;