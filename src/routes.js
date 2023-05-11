import { About } from "./pages/about"
import { Home } from "./pages/home"

export const routes = [
    {
        path: '/about',
        component: <About />
    },
    {
        path: '/',
        component: <Home />
    },
]