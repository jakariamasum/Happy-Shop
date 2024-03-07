import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";

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
            }
        ]
    }
]);

export default router;