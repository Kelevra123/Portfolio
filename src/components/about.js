import React from 'react';

export default function AboutArea() {
  return (
    <section className='about-area' id='about'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6 col-md-12'>
                    <div className='about-image'>
                        <img className='img-fluid' src='../img/about-us.png' alt='About us'/>
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
                            I am 26. I am a beginner JS-Developer. I prefer to work with React, React-Native, but I am familiar with Angular and Vue at the level of understanding (there is no development experience in these frameworks).
                        </p>
                        <p className='para'>
                            You can see my skills below in the <a href='#portfolio'>portfolio</a> section. There I described in detail all the technologies I use with links to my git repository.
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
