import React from 'react';
import {RoutesComponent} from "./ui/routes/RoutesComponent";
import {Header} from "./ui/header/Header";

export const Main = () => {
    return (
        <div className="Main">

                <Header/>
                <RoutesComponent/>

        </div>
    );
}

