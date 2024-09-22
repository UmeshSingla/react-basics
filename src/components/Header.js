import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="app__header">
            <div className="app__logo">
                <img src={LOGO_URL} alt="Grab - Food Delivery"/>
            </div>
            <div className="app__nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="app_login" onClick = { () => {
                            "Login" === btnName ? setBtnName("Logout") : setBtnName("Login");
                        } }>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;