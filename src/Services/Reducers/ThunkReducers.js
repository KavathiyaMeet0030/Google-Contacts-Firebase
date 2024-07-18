

const InitializeState = {
    User: null,
    isLogin: false,
    errmsg : null,
    isSignUP :false
}


const ThunkReducers = (state = InitializeState, action) => {

    switch (action.type) {
        case "SIGNUpSUC":
            return {
                ...state,
                User: action.payload,
                isSignUP:true
            }

        case "SIGNUpReject":
            return {
                ...state,
                errmsg: action.payload,
                isSignUP:false
            }

        case "LOGIN":
            return{
                ...state,
                User: action.payload,
                isLogin:true
            }  
         
            case "LOGINReject":
                return{
                    ...state,
                    errmsg: action.payload
                }      


        default:
            return state
    }

}

export default ThunkReducers;