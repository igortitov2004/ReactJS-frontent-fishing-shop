
import {BrowserRouter} from "react-router-dom";
import NavigBar from "./UI/Navbar";
import AppRouter from "./UI/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <NavigBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}
export default App;
