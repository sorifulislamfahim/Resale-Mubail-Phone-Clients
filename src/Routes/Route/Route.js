import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blog/Blogs";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CatagoryItems from "../../Pages/Home/CatagoryItems/CatagoryItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/SignUpPages/LogIn/Login";
import Register from "../../Pages/SignUpPages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/catagory/:id',
                element: <PrivateRoute><CatagoryItems></CatagoryItems></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagorys/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/dashbord', 
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>
    }
]);

export default router;