import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/RoutesConstants";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.linksBlock}>
                <NavLink to={PATH.LOGIN}><span>Login</span></NavLink>
                <NavLink to={PATH.REGISTER}><span>Register</span></NavLink>
                <NavLink to={PATH.PROFILE}><span>Profile</span></NavLink>
                <NavLink to={PATH.PASSWORD_RECOVERY}><span>Password Recovery</span></NavLink>
                <NavLink to={PATH.ENTERING_A_NEW_PASSWORD}><span>Entering a new password</span></NavLink>
                <NavLink to={PATH.TEST}><span>Test</span></NavLink>
                <span className={s.linksPointer}>☚ LINKS</span>
            </div>
        </div>
    );
}