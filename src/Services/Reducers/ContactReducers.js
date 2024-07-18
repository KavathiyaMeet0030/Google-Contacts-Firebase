import generateUniqueId from "generate-unique-id";


const MainState = {
    Contact: null,
    Contacts: [],
    isEdit:false,
    errmsg:null
}

const contactReducers = (state = MainState, action) => {

    switch (action.type) {


    
            case "GATEDATA":

            return {
                ...state,
                Contacts:action.payload
            }

            case "EditContacts":
                console.log("Contact",action.payload);

            return{
                ...state,
                Contact:action.payload,
                isEdit:true
            }

            case "EditError":

            return{
                ...state,
                isEdit:false,
                errmsg:action.payload
            }

          

        default:
            return state;
    }


}

export default contactReducers;
 