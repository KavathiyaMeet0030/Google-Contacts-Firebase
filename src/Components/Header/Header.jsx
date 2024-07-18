import React from 'react'
import { Row } from 'react-bootstrap';
import { FiMenu } from "react-icons/fi";
import logoimage from '../../assets/image /contactsLogo.png'
import { IoSearch } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import usersideimage from '../../assets/image /usersideimage.jpg'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';



function Header() {

  const Navigate = useNavigate()

  const HandleLogin = () =>{

    Navigate(`/login`);

  }

  return (
    <>

      <div className='bg-header w-100 '>
        <Row>
          <div className='d-flex align-items-center justify-content-between '>
            <div className='d-flex align-items-center px-2'>
              <div className='p-3'>
                <Link to="/" className='text-dark'>
                  <FiMenu className='fs-2' />
                </Link>
              </div>
              <div className='Logo-user d-flex align-items-center'>
                <img src={logoimage} alt="logoimg" height={40} />
                <span className='fs-4 px-2'>Contacts</span>
              </div>

            </div>


            <div className='w-50 bg-serach py-1 rounded-2 px-0'>
              <div className='w-50 bg-serach rounded-2'>
                <form action="#" className='d-flex align-items-center'>
                  <div className='px-2'>
                    <IoSearch className='fs-4' />
                  </div>
                  <div className='px-2 w-100' >
                    <input type="text" className='w-100 border-0 py-2 bg-serach' placeholder='Search...' />
                  </div>
                </form>
              </div>
            </div>

            <div>

                <div className='px-2'>
                   <button className='border-0 bg-header fs-4 color-icon-header'>
                       <MdHelpOutline />
                   </button>
                   <button className='border-0 bg-header fs-4 color-icon-header px-4'>
                      <IoSettingsOutline />
                   </button>
                   <button className='border-0 bg-header fs-4 color-icon-header px-4'>
                       <IoApps />
                   </button>

                  <button  className='border-0 bg-header' onClick={HandleLogin}>
                    <img src={usersideimage} alt="userimg" className='rounded-circle'  />
                  </button>

                </div>
                  
            </div>

          </div>
        </Row>
      </div>

    </>
  )
}

export default Header
