import React from 'react';
import {app} from "../redux/firebase-config";

const Home = () => {
    const onChangeSign=()=>{
        app.auth().signOut()
        console.log('jjj');
    }
    return (
        <div>
            <h1>home</h1>
            <button onClick={onChangeSign}>sign out</button>
        </div>
    );
};

export default Home;