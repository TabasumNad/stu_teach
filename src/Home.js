import React from 'react'
import Nav from './Nav'

import './App.css';

import Crud_s from './Crud_s';
import Crud_t from './Crud_t';

function Home({Toggle}) {
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>30</h3>
                            <p className='fs-5'>Faculties</p>
                        </div>
                        <i className='bi bi-file-person-fill p-3 fs-1'></i>

                    </div>

                </div>


                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>50</h3>
                            <p className='fs-5'>Strenth of each class</p>
                        </div>
                        <i className='bi bi-list-ul p-3 fs-1'></i>

                    </div>

                </div>


                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>2050</h3>
                            <p className='fs-5'>Total Students</p>
                        </div>
                        <i className='bi bi-boxes p-3 fs-1'></i>

                    </div>

                </div>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>41</h3>
                            <p className='fs-5'>Classrooms</p>
                        </div>
                        <i className='"bi bi-bricks p-3 fs-1'></i>

                    </div>

                </div>
            </div>

        </div>
       <div className='flex-container'>
       
     <Crud_s/>
     <Crud_t/>
     
       </div>
    </div>
  )
}

export default Home