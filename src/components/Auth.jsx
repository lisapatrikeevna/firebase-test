import React, {useState, createContext, useEffect} from 'react';
import {app} from '../redux/firebase-config';
import {useDispatch, useSelector} from "react-redux";
import {isAdmin, isAuthTC} from "../redux/loginReduser";
import {AppRootStateType} from "../redux/store";

// interface IContextProps {
//     // children: {};
//     // dispatch: ({type}:{type:string}) => void;
// }

// @ts-ignore
export const AuthContext = React.createContext()
// @ts-ignore
export const AuthProvider = ({children}) => {
    //const dispatch = useDispatch()

    //@ts-ignore
    let [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
            //debugger
            app.auth().onAuthStateChanged(setCurrentUser)
            // dispatch(isAuthTC())
            // debugger
            // dispatch(isAdmin())

        }, []
    )
    console.log(currentUser);
    // const currentUser = useSelector<AppRootStateType>(state => state.login.currentUser)
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
//currentUser
// $: []
// Aa: ƒ (f)
// Ba: ƒ (f)
// J: []
// O: tm {a: Im, b: Array(0), enrolledFactors: Array(0), c: ƒ}
// Oa: ƒ (f)
// R: true
// S: [ƒ]
// X: En {l: false, settings: em, app: FirebaseAppImpl, a: Ii, R: Array(0), …}
// a: Ii {c: "AIzaSyAlLUU7lMQIeyBWGiit7VP0cR1rHqRepBw", l: "https://securetoken.googleapis.com/v1/token", m: Ze, g: {…}, h: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", …}
// aa: ƒ ()
// ac: Im {J: Array(0), l: "AIzaSyAlLUU7lMQIeyBWGiit7VP0cR1rHqRepBw", m: "[DEFAULT]", s: "test-auth-1de7a.firebaseapp.com", a: Ii, …}
// b: Am {f: Ii, a: "AOvuKvRs2y08BzVB9TtbeK5eu9Qdfednp4RSyGdZIwgKIfZ5TS…xNv4YSNtfyN7dTt-lJKo-dXfF8tw9MnL2IYkzxfGPxf4fQGYg", b: hg, c: 1614053244594}
// ba: En {l: false, settings: em, app: FirebaseAppImpl, a: Ii, R: Array(0), …}
// displayName: null
// email: "lisaadmin@mail.ru"
// emailVerified: false
// gb: null
// h: null
// ha: sn {a: "AIzaSyAlLUU7lMQIeyBWGiit7VP0cR1rHqRepBw:[DEFAULT]", b: Tk}
// i: Gl {i: {…}, u: 0, D: "test-auth-1de7a.firebaseapp.com", v: "AIzaSyAlLUU7lMQIeyBWGiit7VP0cR1rHqRepBw", m: "[DEFAULT]", …}
// isAnonymous: false
// ja: En {l: false, settings: em, app: FirebaseAppImpl, a: Ii, R: Array(0), …}
// l: "AIzaSyAlLUU7lMQIeyBWGiit7VP0cR1rHqRepBw"
// m: "[DEFAULT]"
// metadata: Fm {a: "1614043094018", b: "1614043094018", lastSignInTime: "Tue, 23 Feb 2021 01:18:14 GMT", creationTime: "Tue, 23 Feb 2021 01:18:14 GMT"}
// multiFactor: tm {a: Im, b: Array(0), enrolledFactors: Array(0), c: ƒ}
// pa: undefined
// phoneNumber: null
// photoURL: null
// providerData: [{…}]
// refreshToken: "AOvuKvRs2y08BzVB9TtbeK5eu9Qdfednp4RSyGdZIwgKIfZ5TSampAazlXONEadn5flcdtz7CJBAe3gQSH3JiRYzQE9bCIcCSvDrwqdUFt4OXPbTtEpAOtGRUE4qdey1uD1EniXtTt_sz4ZVPkQ1142m0c_JdGKwPI_oXPwQ8F60n1ejcxNv4YSNtfyN7dTt-lJKo-dXfF8tw9MnL2IYkzxfGPxf4fQGYg"
// s: "test-auth-1de7a.firebaseapp.com"
// tenantId: null
// u: xm {c: 30000, f: 960000, h: ƒ, i: ƒ, g: ƒ, …}
// uid: "rLJMKgFgorNHDusqkc7cfw80cG82"
// v: hd {src: Im, a: {…}, b: 4}
// xa: false
// ya: null
// za: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlYmMyZmI5N2QyNWE1MmQ5MjJhOGRkNTRiZmQ4MzhhOTk4MjE2MmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGVzdC1hdXRoLTFkZTdhIiwiYXVkIjoidGVzdC1hdXRoLTFkZTdhIiwiYXV0aF90aW1lIjoxNjE0MDQzMDk0LCJ1c2VyX2lkIjoickxKTUtnRmdvck5IRHVzcWtjN2NmdzgwY0c4MiIsInN1YiI6InJMSk1LZ0Znb3JOSER1c3FrYzdjZnc4MGNHODIiLCJpYXQiOjE2MTQwNDk2NDQsImV4cCI6MTYxNDA1MzI0NCwiZW1haWwiOiJsaXNhYWRtaW5AbWFpbC5ydSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJsaXNhYWRtaW5AbWFpbC5ydSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gjjl2Ouwg3lzukdE0v4NxJJRfVIOuvlD4c3ZALWnNe7exQRdA5qQxifWq65KULZNEQklpz1A75JDrykl3_p37yDqOX0O2GXZ6DO8JbHzaq1zBwEiUh0o-Pl987bWezf3M9tmKztBzKpYk-QV5OO89wxnfZFhL_l4Xm00o1pR3xwzuZDkU-xW5WfszyjLwkmtfZMi0Q9dr2ASe7Fgi2F16_DvwXLNPmbUVJ_htqIcfsWnDjt4yP3tlx1t_BAgt6zkQ6zg1hC6ipcGzXKTMaYAAv8H_bG2CzdnXj2pV2YD6wYY_e5VoGEsqqqLJjKhiIzdr54YEi_Um5hhbBOmYrqIIA"
// _lat: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlYmMyZmI5N2QyNWE1MmQ5MjJhOGRkNTRiZmQ4MzhhOTk4MjE2MmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGVzdC1hdXRoLTFkZTdhIiwiYXVkIjoidGVzdC1hdXRoLTFkZTdhIiwiYXV0aF90aW1lIjoxNjE0MDQzMDk0LCJ1c2VyX2lkIjoickxKTUtnRmdvck5IRHVzcWtjN2NmdzgwY0c4MiIsInN1YiI6InJMSk1LZ0Znb3JOSER1c3FrYzdjZnc4MGNHODIiLCJpYXQiOjE2MTQwNDk2NDQsImV4cCI6MTYxNDA1MzI0NCwiZW1haWwiOiJsaXNhYWRtaW5AbWFpbC5ydSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJsaXNhYWRtaW5AbWFpbC5ydSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gjjl2Ouwg3lzukdE0v4NxJJRfVIOuvlD4c3ZALWnNe7exQRdA5qQxifWq65KULZNEQklpz1A75JDrykl3_p37yDqOX0O2GXZ6DO8JbHzaq1zBwEiUh0o-Pl987bWezf3M9tmKztBzKpYk-QV5OO89wxnfZFhL_l4Xm00o1pR3xwzuZDkU-xW5WfszyjLwkmtfZMi0Q9dr2ASe7Fgi2F16_DvwXLNPmbUVJ_htqIcfsWnDjt4yP3tlx1t_BAgt6zkQ6zg1hC6ipcGzXKTMaYAAv8H_bG2CzdnXj2pV2YD6wYY_e5VoGEsqqqLJjKhiIzdr54YEi_Um5hhbBOmYrqIIA"
// __proto__: H