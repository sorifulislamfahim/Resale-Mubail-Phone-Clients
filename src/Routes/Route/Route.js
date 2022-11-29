import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blog/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CatagoryItems from "../../Pages/Home/CatagoryItems/CatagoryItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/SignUpPages/LogIn/Login";
import Register from "../../Pages/SignUpPages/Register/Register";

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
                path:'/blog', 
                element: <Blogs></Blogs>
            }, 
            {
                path: '/catagory/:id', 
                element: <CatagoryItems></CatagoryItems> ,
                loader: ({params}) => fetch(`http://localhost:5000/catagorys/${params.id}`)
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
]); 

export default router;