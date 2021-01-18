import React from 'react';

export default function Banner() {

  return (
    <>
    <section className='site-banner' id='banner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 col-12 site-title'>
                    <h3 className='title-text'>Hey</h3>
                    <h1 className='title-text text-uppercase'>I am Egor</h1>
                    <h4 className='title-text text-uppercase'>Junior JS Developer</h4>
                    <div className='site-buttons'>
                        <div className='d-flex flex-row flex-wrap'>
                            <a href='#contact'>
                                <button type='button' className='btn button primary-button mr-4 text-uppercase'>hire me</button>
                            </a>
                            <a href='https://dropmefiles.com/rbDu0'>
                                <button type='button' className='btn button secondary-button text-uppercase'>Get CV</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-12 banner-image'>
                    <img src={window.location.origin + '/img/banner/banner-image.png'} alt='banner-img' className='img-fluid'></img>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
