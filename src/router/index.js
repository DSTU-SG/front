import Auth from "../pages/Auth";
import News from "../pages/News";

export const privateRoutes = [

    {path: '/news', component: News, exact: true},
]

export const publicRoutes = [
    {path: '/auth', component: Auth, exact: true},

]