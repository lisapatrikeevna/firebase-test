import React, {ChangeEvent, useCallback, useState} from 'react';
import {app} from '../redux/firebase-config';
import {withRouter} from "react-router";

// @ts-ignore
const SignUp = ({history}) => {
    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    const createEmail = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setEmail(e.currentTarget.value)
    }
    const createPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const HandleSignUp = useCallback(async e => {
        console.log('log'+email, password)
        e.preventDefault()
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email, password)
            history.push('/')
        } catch (error) {
            alert(error)
        }
    }, [history])
    return (
        <div>
            <h1>registration</h1>
            <form onSubmit={HandleSignUp}>
                <input type="email" value={email} onChange={createEmail} placeholder={'email'}/>
                <input type="password" value={password} onChange={createPassword} placeholder={'password'}/>
                <button type={"submit"}>Sign Up</button>
            </form>
        </div>
    );
};

export default withRouter(SignUp);