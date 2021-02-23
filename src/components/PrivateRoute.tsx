import React, {useContext} from 'react';
import {AuthContext} from "./Auth";
import {Redirect, Route} from "react-router";

// @ts-ignore
const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={routeProps =>
            !!currentUser ? (
                <RouteComponent { ...routeProps}/>
            ) : (
               <Redirect  to ={'/login'}/>
            )
            }
       />
    );
};

export default PrivateRoute;