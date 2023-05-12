import React from 'react'
import 'bootstrap/js/dist/dropdown'


function Nav({Toggle}) {
  return (
    // <nav>

    // </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
        <i className="navbar-brand bi bi-justify-left fs-4"  onClick={Toggle}></i>
        <button classNameName="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" 
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        User</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#">profile</a>
                        <a className="dropdown-item" href="#">Log Out</a>
                    </div>
                </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
  )
}

export default Nav;