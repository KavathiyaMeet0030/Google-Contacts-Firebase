import axios from "axios"
import generateUniqueId from "generate-unique-id"

import { useDispatch } from "react-redux"


export const ContactAction = (data) => {

    return {
        type: "AddData",
        payload: data
    }

}

export const EditError = (errmsg) =>{

    return{
        type:"EditError",
        payload:errmsg
    }

}

export const GetData = (data) => {
    return {
        type: "GATEDATA",
        payload: data
    }
}

export const DeleteData = (data) =>{

    return{
        type:"DeleteData",
        payload:data
    }

}

export const editContacts = (editdata) =>{
     console.log("EditData",editdata);

        return{
            type:"EditContacts",
            payload:editdata
        }
}



export const AddDataPostAsync = (data) => {

    return (dispatch) => {

         data.id = generateUniqueId({
            length: 4,
            useLetters: false
        })


        axios.post('http://localhost:3400/Contacts', data).then((res) => {
            console.log("res", res);

            dispatch(GetDataAsync(res.data))

        }).catch((err) => {
            console.log("err", err);
        })

    }
}

export const GetDataAsync = () => {

    return (dispatch) => {

        axios.get('http://localhost:3400/Contacts',).then((res) => {
            console.log("res", res);

            dispatch(GetData(res.data))

        }).catch((err) => {
            console.log("err", err);
        })

    }

}

export const EditDataAsync = (EditId) =>{
    return (dispatch) => {

       axios.get(`http://localhost:3400/Contacts/${EditId}`).then((res)=>{
            console.log("resEdit",res);
            dispatch(editContacts(res.data))
       }).catch((err)=>{
            console.log("err",err);
            dispatch(EditError(err))
       })

    }
}

export const DeleteAsync = (Deleteid) =>{

    return (dispatch) =>{

        axios.delete(`http://localhost:3400/Contacts/${Deleteid}`).then((res)=>{
            console.log("res",res);
            dispatch(DeleteData(res.data))
        }).catch((err)=>{
            console.log("err",err);
        })

    }

}