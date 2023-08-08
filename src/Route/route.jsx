import { createBrowserRouter } from "react-router-dom";
import Root from './../root/Root';
import Login from "../component/Login";
import Register from "../component/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;