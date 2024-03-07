
import {BrowserRouter} from "react-router-dom";
import NavigBar from "./UI/Navbar";
import AppRouter from "./UI/AppRouter";
import {AuthContext} from "./context/context";
import {useEffect, useState} from "react";
import {getAuthToken, setAuthHeader} from "./API/axios_helper";

function App() {
    const [isAuth,setIsAuth] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('auth') && getAuthToken()!==null){
            setIsAuth(true)
        }
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <NavigBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
}
export default App;
