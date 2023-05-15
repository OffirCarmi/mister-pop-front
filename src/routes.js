import { About } from "./pages/about"
import { Home } from "./pages/home"
import { PopApp } from "./pages/pop-app"

export const routes = [
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