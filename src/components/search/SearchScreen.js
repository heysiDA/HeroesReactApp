import React, {useMemo} from 'react';
import queryString from 'query-string';
import HeroCard from "../hero/HeroCard";
import {useForm} from "../hooks/useForm";
import {useLocation} from "react-router-dom";
import {getHeroesByName} from "../selectors/getHeroesByName";

const SearchScreen = ({history}) => {
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [{searchText}, handleInput] = useForm({searchText: q});

    /**
     * Si se quiere hacer la busqueda a penas se escriba en el search ----|
     *                 |-------------------------------------------------|
     *                 V
     * const heroesFiltered = getHeroesByName(searchText);
     */

    // Si se quiere buscar solo cuando de click al boton
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
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
                        name="searchText"
                        className="form-control"
                        onChange={handleInput}
                        autoComplete={'off'}
                        value={searchText}/>

                        <button type="submit"
                        className="btn mt-1 btn-outline-primary" style={{width: '100%'}}>
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        (q==='') &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }
                    {
                        (q!=='' && heroesFiltered.length === 0) &&
                            <div className="alert alert-danger">
                                There is not a hero with {q}
                            </div>
                    }
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
