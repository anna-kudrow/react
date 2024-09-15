import {BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import HomePage from "./components/hw4-components/HomePage";
import AboutPage from "./components/hw4-components/AboutPage";


function HW4() {
    return (  
        <div>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </Router>
        </div>
    );
}

export default HW4;