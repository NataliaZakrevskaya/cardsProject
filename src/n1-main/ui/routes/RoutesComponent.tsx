import React from 'react'
import {Login} from "./pages/Login";
import {Navigate, Routes, Route} from "react-router-dom";
import {PATH} from "./RoutesConstants";
import {Register} from "./pages/Register";
import {Profile} from "./pages/Profile";
import {PasswordRecovery} from "./pages/PasswordRecovery";
import {EnteringANewPassword} from "./pages/EnteringANewPassword";
import {Test} from "./pages/Test";
import {Error404} from "./pages/Error404";

export const RoutesComponent = () => {

    return (
        <div>
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу LOGIN*/}
                <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.ENTERING_A_NEW_PASSWORD} element={<EnteringANewPassword/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={() => <Error404/>}/>

            </Routes>
        </div>
    )
}