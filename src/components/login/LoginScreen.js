import React, {useContext} from 'react'
import {AuthContext} from "../auth/AuthContext";
import {types} from "../types/types";

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = () => {
        // history.push('/');
        dispatch({
            payload: {name: 'Hugo'},
            type: types.login,
        });
        history.replace(lastPath);
    }
    return (
        <div className={'container mt-5'}>
            <h1>LoginScreen</h1>
            <hr/>
            <button className={'btn btn-primary'}
            onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
