import React, { useEffect } from 'react'
import SideBar from '../SideBar/SideBar'
import Home from '../../Components/Home/Home'
import avatr from '../../assets/image /user.png'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAsync, EditDataAsync, GetDataAsync } from '../../Services/Actions/ContactAction';
import { useNavigate } from 'react-router';

function MainContainer() {

  const {Contacts,isEdit} = useSelector(state => state.contactReducers)
  
console.log("contacts",Contacts);

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const HandleEdit = (id) =>{
      console.log("id",id);
   dispatch(EditDataAsync(id))
   navigate(`/edit/${id}`) 

  }

  const HandleDelete = (id) =>{

    dispatch(DeleteAsync(id))
    navigate("/")

  }

  useEffect(()=>{

    dispatch(GetDataAsync())

  },[])

  useEffect((isEdit)=>{

    if(isEdit){
      navigate('/edit') 
    }

  },[isEdit])

  return (
    <>

      <div className='main-content bg-white d-flex'>


        <SideBar className='sidebar' />

        <div className='content rounded-5'>

          <div className='fs-1 text-dark p-3 fst-italic'>
            Contacts
          </div>

          <table className='w-100 p-2 text-center'>
            <thead>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Notes</th>
              <th>Actions</th>
            </thead>

            <tbody className='w-100'>



              {
                Contacts.map((contact) => {

                  return (
                    <>

                      <tr >
                        <td className='w-2 py-2'>
                          <img src={contact.avatr} alt="avtar" className='avtar' />
                        </td>
                        <td className='w-2 py-2'>
                          {contact.Name}
                        </td>
                        <td className='w-2 py-2'>
                         {contact.Email}
                        </td>
                        <td className='w-2 py-2'>
                         {contact.PhoneNo}
                        </td>
                        <td className='w-2 py-2'>
                          {contact.Address}
                        </td>
                        <td className='w-2 py-2'>
                          {contact.Notes}
                        </td>
                        <td className='w-2 py-2'>
                          <button className='border-0 bg-body px-1 fs-4 text-warning' onClick={()=> HandleEdit(contact.id)}>
                            <FaEdit />
                          </button>
                          <button className='border-0 bg-body fs-4 text-danger' onClick={()=> HandleDelete(contact.id)}>
                            <RiDeleteBin2Fill />
                          </button>
                        </td>
                      </tr>
                    </>
                  )

                })}

            </tbody>
          </table>

        </div>


      </div>


    </>
  )
}

export default MainContainer
