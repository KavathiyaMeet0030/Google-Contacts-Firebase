import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { IoMdArchive } from "react-icons/io";
import { MdHandyman } from "react-icons/md";
import { CiImport } from "react-icons/ci";
import { RiDeleteBin6Fill } from "react-icons/ri";

function SideBar() {
    return (
        <>
            <div className=' bg-header Sidebar'>


                <Link to="/create" className='text-decoration-none text-dark'>
                    <div className='p-4'>
                        <div className='d-flex align-items-center btn-create-bg justify-content-center rounded-4 p-0 w-75'>
                            <div className='fs-1 '>
                                <GoPlus />
                            </div>
                            <div className='fs-6 mt-3 mb-2 px-2'>
                                Create contact
                            </div>
                        </div>

                    </div>

                </Link>


                <div className='p-3 pb-0'>
                      <div>
                        <div className='d-flex align-items-center btn-create-bg justify-content-between rounded-4 p-0 w-95 '>
                            <div className='fs-4 px-4'>
                                 <FaUserAlt />
                            </div>
                            <div className='fs-6 mt-3 mb-3 px-5'>
                                 Contacts
                            </div>
                        </div>
                      </div>
                </div>


                <div className='p-3 py-0'>
                      <div>
                        <div className='d-flex align-items-center justify-content-between rounded-4 p-0 w-95 '>
                            <div className='fs-4 px-4'>
                                <RxCountdownTimer />
                            </div>
                            <div className='fs-6 mt-3 mb-3 px-5'>
                                    Frequent
                            </div>
                        </div>
                      </div>
                </div>


                <div className='p-3 py-0 pb-0'>
                      <div>
                        <div className='d-flex align-items-center justify-content-between rounded-4 p-0 w-95 '>
                            <div className='fs-4 px-4'>
                            <       IoMdArchive />
                            </div>
                            <div className='fs-6 mt-3 mb-3 px-2'>
                                   Other contacts
                            </div>
                        </div>
                      </div>
                </div>

                <div className='p-3'>
                    <h4 className='fs-5'>Fix and manage</h4>
                </div>



                <div className='p-3 py-0'>
                      <div>
                        <div className='d-flex align-items-center justify-content-between rounded-4 p-0 w-95 '>
                            <div className='fs-4 px-4'>
                                 <MdHandyman />
                            </div>
                            <div className='fs-6 mt-3 mb-3 px-4'>
                                     Merge and fix
                            </div>
                        </div>
                      </div>
                </div>


                <div className='p-3 py-0'>
                      <div>
                        <div className='d-flex align-items-center justify-content-between rounded-4 p-0 w-95 '>
                            <div className='fs-4 px-4'>
                                    <CiImport />
                            </div>
                            <div className='fs-6 mt-3 mb-3 px-5 me-5'>
                                    Import
                            </div>
                        </div>
                      </div>
                </div>

                <div className='p-3 py-0'>
                      <div>
                        <div className='d-flex align-items-center justify-content-between rounded-4 p-0 w-95 '>
                            <div className='fs-4 px-4'>
                                     <RiDeleteBin6Fill />
                            </div>
                            <div className='fs-6 mt-3 mb-3 px-5 me-5'>
                                   Bin
                            </div>
                        </div>
                      </div>
                </div>


            </div>
        </>
    )
}

export default SideBar
