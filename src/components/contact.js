import React from 'react';

export default function ContactArea() {
  return (
    <section className='contact-me-area' id='contact'>
        <div className='container contact'>
            <div className='row'>
                <div className='col-lg-12 text-center contact-title'>
                    <h4 className='text-uppercase'>Contact Me</h4>
                    
                </div>
            </div>
            <div className='d-sm-flex justify-content-center social'>
                <a className='link' href='https://t.me/EgorNikiforenko'><i className="fab fa-telegram fa-3x mx-3"></i></a>
                <a className='link' href='https://github.com/Kelevra123'><i className="fab fa-github fa-3x mx-3"></i></a>
                <a className='link' href='https://www.facebook.com/profile.php?id=100016148190326'><i className="fab fa-facebook fa-3x mx-3"></i></a>
                <a className='link' href='https://www.instagram.com/nikiforenkoegor/?hl=ru'><i className="fab fa-instagram fa-3x mx-3 inst"></i></a>
            </div>
            <div className='col-lg-12 text-center mail'>
            <a className='mail-text' href='mailto:w184mee@gmail.com'>w184mee@gmail.com</a>
            </div>
        </div>
        <div className='container d-lg-none d-md-block d-sm-block d-block'>
                    <h4 className='text-uppercase text-center'>Contact Me</h4>
                <div className='d-flex justify-content-center my-3'>
                    <a className='link' href='https://t.me/EgorNikiforenko'><i className="fab fa-telegram fa-2x mx-3"></i></a>
                    <a className='link' href='https://github.com/Kelevra123'><i className="fab fa-github fa-2x mx-3"></i></a>
                    <a className='link' href='https://www.facebook.com/profile.php?id=100016148190326'><i className="fab fa-facebook fa-2x mx-3"></i></a>
                    <a className='link' href='https://www.instagram.com/nikiforenkoegor/?hl=ru'><i className="fab fa-instagram fa-2x mx-3 inst"></i></a>
                </div>
                <div className='col-lg-12 text-center mail'>
                    <a href='mailto:w184mee@gmail.com'>w184mee@gmail.com</a>
                </div>
        </div>
    </section>
  );
}
