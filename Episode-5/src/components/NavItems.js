import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const NavItems = () => {
    const [onlineStatus] = useOnlineStatus();
    return (
        <>
            <ul className="flex items-center m-5">
                <li>
                    {
                        onlineStatus 
                        ? <div className="text-2xl text-green-600 mr-7">online 🟢</div> 
                        : <div className="text-2xl text-red-600 mr-7">ofline 🔴</div>
                    }
                </li>
                <Link to={"/"} className="text-2xl text-orange-600 mx-3 border-b-[2.5] border-slate-100 py-2 hover:border-orange-600 font-sans hover:font-semibold">Home</Link>
                <Link to={"/about"} className="text-2xl text-orange-600 mx-3 border-b-[2.5] border-slate-100 py-2 hover:border-orange-600 font-sans hover:font-semibold">About</Link>
                <Link to={"/contact"} className="text-2xl text-orange-600 mx-3 border-b-[2.5] border-slate-100 py-2 hover:border-orange-600 font-sans hover:font-semibold">Contact</Link>
                <Link to={"/support"} className="text-2xl text-orange-600 mx-3 border-b-[2.5] border-slate-100 py-2 hover:border-orange-600 font-sans hover:font-semibold">Support</Link>
            </ul>
        </>
    )
};