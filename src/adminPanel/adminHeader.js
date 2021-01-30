import React from 'react'
import {Link} from "react-router-dom";

const AdminHeader = ({editMode}) => {
    return (
        <header className='header_area' id='header'>
            <div className='main-menu'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to='/'><img src={window.location.origin + '/img/logo.png'} alt='...'/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className='mr-auto'/>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link
                                    className="nav-link"
                                    to="/page">
                                    {editMode ? 'Edit' : 'ADD'}
                                    <span
                                        className="sr-only"
                                    >
                                        (current)
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/galery">View All</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default AdminHeader
