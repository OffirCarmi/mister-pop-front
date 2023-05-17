import { About } from "./pages/about"
import { Home } from "./pages/home"
import { PopApp } from "./pages/pop-app"
import { PopDetails } from "./pages/pop-details"

export const routes = [
    {
        path: '/pop/:popId',
        component: <PopDetails />
    },
    {
        path: '/pop',
        component: <PopApp />
    },
    {
        path: '/about',
        component: <About />
    },
    {
        path: '/',
        component: <Home />
    },
]