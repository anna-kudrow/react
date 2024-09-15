import { Link } from "react-router-dom";

function HomePage() {
    return ( 
        <div>
            <Link to='/about'>About page</Link>
            <h2>Main page</h2>
            <p>This is the main page of all these pages.</p>
        </div>
     );
}

export default HomePage;