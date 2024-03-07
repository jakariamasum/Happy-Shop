import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
        ]
    }
]);

export default router;