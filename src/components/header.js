import React, { useEffect, useRef } from 'react';

export default function Header() {

    const getHeader = useRef(null)

    useEffect(() => {

        const header = getHeader.current
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener('scroll', () => {
            if (window.pageYOffset > sticky) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky')
            }
        return () => {
            window.removeEventListener('scroll', scrollCallBack)
        }
        })
    }, [getHeader])
   


  return (
    <>
    <header className='header_area' id='header' ref={getHeader}>
        <div className='main-menu'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href='/'><img src={window.location.origin + '/img/logo.png'} alt='...'></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='mr-auto'></div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    </>
  );
}
