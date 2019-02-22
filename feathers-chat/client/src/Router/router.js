import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import browserPlugin from 'router5-plugin-browser'

import routes from './routes'

export default function configureRouter() {
    const router = createRouter(routes, {
        defaultRoute: 'auth.login',
        allowNotFound: true
    });
    
    router.usePlugin(loggerPlugin);
    router.usePlugin(browserPlugin({
        useHash: false,
    }));

    return router;
}