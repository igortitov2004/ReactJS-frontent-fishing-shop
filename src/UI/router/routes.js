import Main from "../../Pages/Main";
import Rods from "../../Pages/Rods";
import Reels from "../../Pages/Reels";
import Login from "../../Pages/Login";
import ReelCreateForm from "../forms/ReelCreateForm";
import RodCreateFrom from "../forms/RodCreateFrom";
import ReelEditForm from "../forms/ReelEditForm";
import RodEditForm from "../forms/RodEditForm";
import ManufacturersAndTypes from "../../Pages/ManufacturersAndTypes";
import Error from "../../Pages/Error";
import Registration from "../../Pages/Registration";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import Cart from "../../Pages/Cart";
import Orders from "../../Pages/Orders";

export const publicRoutes = [
    {path: "/login", element: <Login/>, index: true},
    {path: "/register", element: <Registration/>, index: true},
    {path: "/main", element: <Main/>, index: true},
    {path: "", element: <Main/>, index: true},
    {path: "/rods", element: <Rods/>, index: true},
    {path: "/reels", element: <Reels/>, index: true},
    {path: "*", element: <Error/>, index: true}

]
export const privateRoutes = [
    {path: "/main", element: <Main/>, index: true},
    {path: "", element: <Main/>, index: true},
    {path: "/rods", element: <Rods/>, index: true},
    {path: "/reels", element: <Reels/>, index: true},
    {path: "/createReel", element: <ReelCreateForm/>, index: true},
    {path: "/createRod", element: <RodCreateFrom/>, index: true},
    {path: "/editReel/:id", element: <ReelEditForm/>, index: true},
    {path: "/editRod/:id", element: <RodEditForm/>, index: true},
    {path: "/manufAndTypes", element: <ManufacturersAndTypes/>, index: true},
    {path: "*", element: <Error/>, index: true},
    {path: "/changePass", element: <ChangePasswordForm/>, index: true}
]
export const privateRoutesUser = [
    {path: "/main", element: <Main/>, index: true},
    {path: "", element: <Main/>, index: true},
    {path: "/rods", element: <Rods/>, index: true},
    {path: "/reels", element: <Reels/>, index: true},
    {path: "*", element: <Error/>, index: true},
    {path: "/changePass", element: <ChangePasswordForm/>, index: true},
    {path: "/cart", element: <Cart/>, index: true},
    {path: "/orders", element: <Orders/>, index: true}
]

