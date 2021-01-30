import React from 'react';
import IMAGES from '../img/brands/logos';

export default function BrandArea() {

    const brand = (arr) => {
        const content = arr.map(item => {
            return (
                <div key={item.alt} className='col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12'>
                            <div className='single-brand'>
                                <img src={item.img} alt={item.alt}/>
                            </div>
                        </div>
            )
        })
        return content
    }

    const content = brand(IMAGES);

  return (
    <section className='brand-area' id='skills'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <div className='first-row row'>
                        {content}
                    </div>
                </div>
                        
                <div className='col-xl-6 col-lg-12 col-md-12 d-md-none d-lg-block'>
                    <div className='experience-area'>
                        <div className='d-flex flex-row years-area'>
                            <h2 className='p-3 years'>1 </h2>
                            <h2>
                                <span>Years</span>
                                <span>Freelance</span>
                                <span>Experience</span>
                            </h2>
                        </div>
                        {/* <div className='d-flex flex-row flex-wrap call-area open'>
                            <span><i className='fas fa-phone-alt fa-3x px-3'></i></span>
                            <div className='call-now'>
                                <a href='#' className='text-uppercase h4 font-roboto'>Call Now</a>
                                <span className='font-roboto py-2'>(+38)-099-975-56-67</span>
                            </div>
                        </div> */}
                        <div className='bg-panel'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
