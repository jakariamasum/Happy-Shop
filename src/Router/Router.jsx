import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";

const router= createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    }
]);

export default router;