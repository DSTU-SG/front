import Auth from "../pages/Auth";
import News from "../pages/News";
import Card from "../pages/Card";
import Services from "../pages/Services";
import Education from "../pages/Education";
import Voting from "../pages/Voting";


export const privateRoutes = [

    {path: '/news', component: News, exact: true},
    {path: '/card', component: Card, exact: true},
    {path: '/service', component: Services, exact: true},
    {path: '/education', component: Education, exact: true},
    {path: '/voting', component: Voting, exact: true},

]

export const publicRoutes = [
    {path: '/auth', component: Auth, exact: true},

]