import React from 'react'
import {Navbar} from "../components/ui/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import {MarvelScreen} from "../components/maverl/MarvelScreen";
import {HeroScreen} from "../components/hero/HeroScreen";
import {DCScreen} from "../components/dc/DCScreen";
import SearchScreen from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className={'container mt-3'}>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/dc" component={DCScreen}/>
                    <Route exact path="/hero/:heroId" component={HeroScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
