import 'normalize.css'
import SignUpForm from "./components /SignUpForm.jsx";
import UserTable from "./components /UserTable.jsx";
import LoginForm from "./components /LoginForm.jsx";
import HomePage from "./veiws/HomePage.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components /NotFound.jsx";


const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>} />
                <Route path="/signup" element={<SignUpForm/>} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/users" element={<UserTable/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App