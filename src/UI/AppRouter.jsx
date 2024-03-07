import React, {useContext} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Error from "../Pages/Error";
import Main from "../Pages/Main";
import Rods from "../Pages/Rods";
import Reels from "../Pages/Reels";
import ReelCreateForm from "./forms/ReelCreateForm";
import ReelEditForm from "./forms/ReelEditForm";
import RodCreateFrom from "./forms/RodCreateFrom";
import RodEditForm from "./forms/RodEditForm";
import ManufacturersAndTypes from "../Pages/ManufacturersAndTypes";
import {publicRoutes, privateRoutes, privateRoutesUser} from "./router/routes";
import {AuthContext} from "../context/context";
import {getAuthToken, getRole} from "../API/axios_helper";


const AppRouter = () => {

    // const {isAuth,setIsAuth} = useContext(AuthContext)
    // console.log(isAuth)
    return (
        getRole()==="USER" ? <Routes>
                    {privateRoutesUser.map(route =>
                        <Route path={route.path}
                               element={route.element}
                               index={route.index}/>)
                    }
                </Routes> : getRole()==="ADMIN" ?
                <Routes>
                    {privateRoutes.map(route =>
                            <Route path={route.path}
                                   element={route.element}
                                   index={route.index}/>)
                    }
                </Routes> :
                <Routes>
                {publicRoutes.map(route =>
                        <Route path={route.path}
                               element={route.element}
                               index={route.index}/>
                    )
                } </Routes>
        );
};

export default AppRouter;