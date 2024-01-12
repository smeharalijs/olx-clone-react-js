
import { createBrowserRouter, RouterProvider} from"react-router-dom";


import Dashboard from "../Views/Dashboard";
import Detail from "../Views/Detail";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/detail/:adId",
        element: <Detail/>,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />

}

export default Router;