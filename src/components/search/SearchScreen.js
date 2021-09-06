import React from 'react';
import {heroes} from "../data/heroes";
import HeroCard from "../hero/HeroCard";
import {useForm} from "../hooks/useForm";

const SearchScreen = () => {
    const heroesFiltered = heroes;
    const [{search}, handleInput] = useForm({search: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                        placeholder="find your hero"
                        name="search"
                        className="form-control"
                        onChange={handleInput}
                        value={search}/>

                        <button type="submit"
                        className="btn m-1 btn-outline-primary">
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                             key={hero.id}
                             {...hero}
                            width={'100%'}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
