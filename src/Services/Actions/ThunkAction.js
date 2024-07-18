import { useDispatch } from "react-redux";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const signupsucess = (user) => {

    return {
        type: "SIGNUpSUC",
        payload: user
    }

}

const signupreject = (Error) => {

    return {
        type: "SIGNUpSUC",
        payload: Error
    }   

}

const Loginsucess = (LoginUser) =>{

    return{
        type: "LOGIN",
        payload:LoginUser
    }

}

 const LoginReject = (Error) =>{
    return{
        type: "LOGINReject",
        payload:Error
    }

 }



export const SignUpAsync = (user) => {

    return (dispatch) => {

        createUserWithEmailAndPassword(auth, user.Email, user.Pass)
            .then((userCredential) => {
                console.log("usercr", userCredential);
                dispatch(signupsucess(userCredential.user))
            })
            .catch((error) => {
                console.log("err", error);
                dispatch(signupreject(error))
            });
    }

}

export const SignInAsync = (LoginUser) => {

    return (dispatch) => {
        signInWithEmailAndPassword(auth, LoginUser.Email, LoginUser.Pass)
            .then((userCredential) => {
                console.log("usercre",userCredential);
                dispatch(Loginsucess(userCredential.user))
            })
            .catch((error) => {
                console.log("error",error);
               dispatch(LoginReject(error))
            });
    }


}