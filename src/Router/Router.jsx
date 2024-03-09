import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserDashboard from "../Dashboard/UserDashboard/UserDashboard";
import UserProfile from "../Dashboard/UserDashboard/UserProfile";

const router= createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }   
        ],
    },
    
    {
            path: '/dashboard/myAccount',
            element: <UserDashboard/>,
            children:[
                {
                    path:'profile',
                    element: <UserProfile/>
                }
            ]
    }
    
]);

export default router;