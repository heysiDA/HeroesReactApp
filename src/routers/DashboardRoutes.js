import React from 'react'
import {Navbar} from "../components/ui/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import {MarvelScreen} from "../components/maverl/MarvelScreen";
import {HeroScreen} from "../components/hero/HeroScreen";
import {DCScreen} from "../components/dc/DCScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className={'container mt-3'}>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/dc" component={DCScreen}/>
                    <Route exact path="/hero/:heroId" component={HeroScreen}/>
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
