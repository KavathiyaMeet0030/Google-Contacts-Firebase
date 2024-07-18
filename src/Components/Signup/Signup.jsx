import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { SignUpAsync } from '../../Services/Actions/ThunkAction';
import { Navigate, useNavigate } from 'react-router';


function Signup() {

    const {isSignUP} = useSelector(state => state.ThunkReducers)

    const [Userinput,setInputState] = useState({
        fname:'',
        Email:'',
        Pass:''
    })

    const HandleChange = (e) =>{

        let name = e.target.name;
        let value = e.target.value;

        setInputState({ ...Userinput, [name]: value });

    }

     const dispatch = useDispatch();
     const navigate = useNavigate();
    const HandleSubmit = (e) =>{

        e.preventDefault();

        dispatch(SignUpAsync(Userinput));


    }

     useEffect(()=>{

        if(isSignUP){
                navigate(`/login`)
        }

     },[isSignUP])

    return (
        <>

            <div className="container py-5">

                <div className='w-35 bg-serach rounded-5 p-5 mx-auto mt-1'>
                    <Form onSubmit={HandleSubmit}>

                        <div>
                            <h1 className='text-center text-dark py-3'>
                                Sign Up
                            </h1>

                            <Form.Group className="mb-2" controlId="formGroupPassword">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your First Name.. " name='fname' onChange={HandleChange}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-2" controlId="formGroupPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email... " name='Email' onChange={HandleChange} />
                            </Form.Group>
                           
                            <Form.Group className="mb-2" controlId="formGroupEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Your Password..." name='Pass'  onChange={HandleChange}/>
                            </Form.Group>
                            

                        </div>
                        
                        <div className='py-4 d-flex align-items-center justify-content-center'>

                             

                        </div>


                       


                        <div className='py-4 mb-2'>
                            <div className='position-relative'>
                                <button className='px-5 py-2 border-0 position-absolute top-50 start-50 translate-middle rounded-pill  btn btn-primary'>
                                   Sign Up
                                </button>
                            </div>

                        </div>
                    </Form>
                </div>

            </div>


        </>
    )
}

export default Signup;
