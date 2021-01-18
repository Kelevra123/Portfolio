import React from 'react';

export default function AboutArea() {
  return (
    <section className='about-area' id='about'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6 col-md-12'>
                    <div className='about-image'>
                        <img className='img-fluid' src={window.location.origin + '/img/about-us.png'} alt='About us'></img>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 about-title'>
                    <h2 className='text-uppercase pt-5'>
                        <span>Let me</span>
                        <span> introduce</span>
                        <span> myself</span>
                    </h2>
                    <div className='paragraph py-4 w-75'>
                        <p className='para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores ipsa porro dolorem ipsam id et rem perferendis debitis officiis?
                        </p>
                        <p className='para'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        </p>
                    </div>
                    <a href='https://dropmefiles.com/rbDu0'>
                        <button type='button' className='btn button primary-button text-uppercase'>Download cv</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}
