import React, {useEffect, useState} from 'react'
import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import {Redirect, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isAdmin} from "./redux/loginReduser";
import {AppRootStateType} from "./redux/store";

const App = () => {
    let loggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isInitialized)

    const dispatch = useDispatch()
    // useEffect(() => {
    //         // debugger
    //         dispatch(isAdmin())
    //     }, []
    // )
    return (
        <div className="App">
            <Route exact path='/' > {loggedIn ? <Redirect to="/login" /> : <Home />}</Route>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
        </div>
    );
}

export default App;
