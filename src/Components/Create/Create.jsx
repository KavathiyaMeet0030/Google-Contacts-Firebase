import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AddDataPostAsync } from '../../Services/Actions/ContactAction';


const  Create = () => {

  
  const [Details, setDetails] = useState({
    id: '',
    Avatar: '',
    Name: '',
    Email: '',
    PhoneNo: '',
    Address: '',
    Notes: ''
    
  });


  const [state, setState] = useState(null);

  const [meet, setMeet] = useState(false)

  let navigate = useNavigate();


  const handleChange = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setDetails({ ...Details, [name]: value });

  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();


    dispatch(AddDataPostAsync(Details))

    navigate(`/`);



  }




  return (
    <>

      <div className='pt-5 '>
        <div className='create-bg w-50 rounded-5 d-flex mx-auto'>
          <div className='p-5 w-100 pb-0' >

            <Form onSubmit={handleSubmit}>

              <div>
                <h1 className='text-center'>
                  Create Contacts
                </h1>
                <Form.Group className="mb-2" controlId="formGroupEmail">
                  <Form.Label>Avatar</Form.Label>
                  <Form.Control type="file" placeholder="Enter Avtar"  name='Avatar' onChange={handleChange}  value={Details.Avatar}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name..."  name='Name' onChange={handleChange} value={Details.Name} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email... "  name='Email' onChange={handleChange} value={Details.Email} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPassword">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control type="number" placeholder="Enter Your Number... "  name='PhoneNo' onChange={handleChange} value={Details.PhoneNo}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPassword">
                  <Form.Label>
                    Address
                  </Form.Label>
                  <Form.Control as="textarea" type="textarea" placeholder="Enter Your Address... "  name='Address' onChange={handleChange} value={Details.Address} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPassword">
                  <Form.Label>
                    Notes
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Notes... "  name='Notes' onChange={handleChange} value={Details.Notes}/>
                </Form.Group>

              </div>


              <div className='py-4 mb-2'>
                <div className='position-relative'>
                  <button className='px-5 py-2 border-0 position-absolute top-50 start-50 translate-middle rounded-pill  btn btn-primary'>
                    Submit
                  </button>
                </div>

              </div>
            </Form>

          </div>
        </div>

      </div>


    </>
  )
}

export default Create;
