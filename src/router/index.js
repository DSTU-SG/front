import Auth from "../pages/Auth";
import News from "../pages/News";
import Card from "../pages/Card";
import Cashback from "../pages/Cashback";
import Education from "../pages/Education";
import Voting from "../pages/Voting";


export const privateRoutes = [

    {path: '/news', component: News, exact: true},
    {path: '/card', component: Card, exact: true},
    {path: '/cash', component: Cashback, exact: true},
    {path: '/education', component: Education, exact: true},
    {path: '/voting', component: Voting, exact: true},

]

export const publicRoutes = [
    {path: '/auth', component: Auth, exact: true},

]