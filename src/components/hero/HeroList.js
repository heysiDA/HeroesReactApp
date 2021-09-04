import React, { useMemo } from 'react'
import {getHeroesByPublisher} from "../selectors/getHeroesByPublisher";
import './hero.css';
import HeroCard from "./HeroCard";

export const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className={'row'}>
            {
                heroes.map( h => (
                    <HeroCard key={h.id}
                        {...h}/>
                    )
                )
            }
        </div>
    )
}
