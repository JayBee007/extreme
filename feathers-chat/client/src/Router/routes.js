import { isAuthenticated } from '../utils';
export default [
    {
        name: 'auth',
        path: '/auth',
        forwardTo: 'auth.login'
    },
    {
        name: 'auth.signup',
        path: '/signup',
    },
    {
        name: 'auth.login',
        path: '/login',
        canActivate: isAuthenticated,
    },
    {
        name: 'chat',
        path: '/chat'
    }
]