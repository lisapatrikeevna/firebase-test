import React, {ChangeEvent, useCallback, useContext, useState} from 'react';
import {app} from "../redux/firebase-config";
import {Redirect, withRouter} from "react-router";
import {AuthContext} from "./Auth";
import {useDispatch} from "react-redux";
import { loginTC } from '../redux/loginReduser';

// @ts-ignore
const Login = ({history}) => {
    const dispatch=useDispatch()
    //admin lisa@mail.ru lisa15
    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    const createEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const createPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const HandleLogin = async ()=>{
        // debugger
        dispatch(loginTC(email, password))}
       //  useCallback(async e => {
       //      dispatch(loginTC(email, password))
       //      console.log('log. Logined: '+email, password)
       //
       //      // // e.preventDefault()
       //      // try {
       //      //     debugger
       //      //     await app
       //      //         .auth()
       //      //         .signInWithEmailAndPassword(email, password)
       //      //     // history.push('/')
       //      //
       //      // } catch (error) {
       //      //     alert(error)
       //      // }
       //
       //  },
       //  []
       // )
debugger
    // @ts-ignore
    const {currentUser} = useContext(AuthContext)
    if (currentUser) {
        debugger
        return <Redirect to={'/'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={HandleLogin}>
                <input type="email" value={email} onChange={createEmail} placeholder={'email'}/>
                <input type="password" value={password} onChange={createPassword} placeholder={'password'}/>
                <button type={"submit"}>Sign Up</button>
            </form>
        </div>
    );
};

export default withRouter(Login);