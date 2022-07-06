import React from 'react';
import classes from "../header/hedaer.module.css";
import { NavLink} from "react-router-dom";

function Footer() {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.menu}>
                <li>
                    <NavLink to="/" className={classes.link}>main</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={classes.link}>about</NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className={classes.link}>contact</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Footer;