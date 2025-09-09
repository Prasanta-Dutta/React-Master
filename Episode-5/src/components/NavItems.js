import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const NavItems = () => {
    const [onlineStatus] = useOnlineStatus();
    return (
        <>
            <ul className="nav-item-container">
                <li>
                    {
                        onlineStatus 
                        ? <div className="online-status">online 🟢</div> 
                        : <div className="ofline-status">ofline 🔴</div>
                    }
                </li>
                <Link to={"/"} className="nav-items">Home</Link>
                <Link to={"/about"} className="nav-items">About</Link>
                <Link to={"/contact"} className="nav-items">Contact</Link>
                <Link to={"/support"} className="nav-items">Support</Link>
            </ul>
        </>
    )
};