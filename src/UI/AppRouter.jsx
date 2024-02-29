import React from 'react';
import {Route, Routes} from "react-router-dom";
import Error from "../Pages/Error";
import Main from "../Pages/Main";
import Rods from "../Pages/Rods";
import Reels from "../Pages/Reels";
import ReelCreateForm from "./forms/ReelCreateForm";
import ReelEditForm from "./forms/ReelEditForm";
import RodCreateFrom from "./forms/RodCreateFrom";
import RodEditForm from "./forms/RodEditForm";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="*"
                element={<Error/>}
            />
            <Route path="/reels" element={<Reels />} />
            <Route path="/rods" element={<Rods />} />
            <Route path="/main" element={<Main />} />
            <Route path="/createReel" element={<ReelCreateForm />} />
            <Route path="/createRod" element={<RodCreateFrom />} />
            <Route path="/editReel/:id" element={<ReelEditForm />} />
            <Route path="/editRod/:id" element={<RodEditForm />} />
        </Routes>
    );
};

export default AppRouter;