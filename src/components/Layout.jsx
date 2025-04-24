import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Reviews</Link>
                <Link to="/now-playing">Now Playing</Link>
                <Link to="/about">About</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
