import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import Register from "../common/Register";
import NewPassword from "../common/NewPassword";
import Packs from "../common/Packs";
import Login from "../common/Login";
import PasswordRecovery from "../common/PasswordRecovery";
import Logout from "../common/Logout";
import Profile from "../common/Profile/Profile";
import Cards from "../common/Cards";

export enum RoutesXPaths {
    PROFILE = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    RECOVERY = '/passwordrecovery',
    PACKS = '/packs',
    CARDS = '/cards',
    CARDSWITHID = '/cards/:packId',
    SET_PASS = '/set-new-password/:token',
    NOT_FOUND = '/404',
    LOGOUT = '/logout'
}

const RoutesX = () => {
    return (
        <div style={{height:'100vh'}}>
            <Routes>
                <Route path={RoutesXPaths.PROFILE} element={<Profile/>}/>
                <Route path={RoutesXPaths.REGISTER} element={<Register/>}/>
                <Route path={RoutesXPaths.LOGIN} element={
                    <Login/>
                }/>
                <Route path={RoutesXPaths.RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={RoutesXPaths.SET_PASS} element={<NewPassword/>}/>
                <Route path={RoutesXPaths.PACKS} element={<Packs/>}/>
                <Route path={RoutesXPaths.CARDS} element={<Cards/>}/>
                <Route path={RoutesXPaths.CARDSWITHID} element={<Cards/>}/>
                <Route path={RoutesXPaths.LOGOUT} element={<Logout/>}/>
                <Route path={RoutesXPaths.NOT_FOUND}
                       element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={RoutesXPaths.NOT_FOUND}/>}/>
            </Routes>
        </div>
    );
};

export default RoutesX;