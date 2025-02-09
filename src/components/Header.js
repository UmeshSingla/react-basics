import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="flex justify-between shadow-lg bg-white">
            <div className="app__logo">
                <img src={LOGO_URL} alt="Grab - Food Delivery" className="w-60"/>
            </div>
            <div className="flex">
                <ul className="flex items-center items">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4">
                        <button className="app_login" onClick={() => {
                            "Login" === btnName ? setBtnName("Logout") : setBtnName("Login");
                        }}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;