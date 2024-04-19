import Auth from "../pages/Auth";
import News from "../pages/News";

// export const privateRoutes = [

//     {path: '/about', component: About, exact: true},
//     {path: '/posts', component: Posts, exact: true},
//     {path: '/posts/:id', component: PostIdPage, exact: true},
// ]

export const publicRoutes = [
    {path: '/auth', component: Auth, exact: true},
    {path: '/news', component: News, exact: true},
]