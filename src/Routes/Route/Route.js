import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blog/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CatagoryItems from "../../Pages/Home/CatagoryItems/CatagoryItems";
import Home from "../../Pages/Home/Home/Home";

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
                element: <CatagoryItems></CatagoryItems>
            }, 
            // {
            //     path: '/catagoryitems/:id', 
            //     element: 
            // },  

        ], 
        errorElement: <ErrorPage></ErrorPage>
    }, 
]); 

export default router;