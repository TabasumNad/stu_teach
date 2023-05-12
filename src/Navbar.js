import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <div className='bg-white nav p-2'>
        <div className='m-2'>
            <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
            <span className='brand-name fs-4'>Admin</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2 '>
                <i className='bi bi-speedometer2 fs-5 me-2'></i>
                <span className='fs-5'>Dashboard</span>
            </a>

            <a className='list-group-item  py-2 '>
                <i className='bi bi-house  fs-5 me-3'></i>
                <span className=' fs-5'>Home</span>
            </a>

            <a className='list-group-item  py-2'>
                <i className='bi bi-info-square  fs-4 me-3'></i>
                <span className='fs-5'>About Us</span>
            </a>

            <a className='list-group-item  py-2'>
                <i className='bi bi-telephone-inbound  fs-4 me-2'></i>
                <span className='fs-5'>Contact</span>
            </a>

        </div>
    </div>
  )
}

export default Navbar