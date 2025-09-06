import { Link } from "react-router-dom";

export const NavItems = () => {
    return (
        <>
            <ul className="nav-item-container">
                <Link to={"/"} className="nav-items">Home</Link>
                <Link to={"/about"} className="nav-items">About</Link>
                <Link to={"/contact"} className="nav-items">Contact</Link>
                <Link to={"/support"} className="nav-items">Support</Link>
            </ul>
        </>
    )
};