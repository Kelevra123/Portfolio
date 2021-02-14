import React from 'react';
import SERVICES from '../img/services/services';


export default function ServicesArea() {

    const services = (arr) => {
        const content = arr.map(item => {
            return (
                <div key={item.alt} className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='services'>
                            <div className='sevices-img text-center py-4'>
                                <img src={item.img} alt={item.alt}/>
                            </div>
                            <div className='card-body text-center'>
                                <h5 className='card-title text-uppercase font-roboto'>
                                    {item.title}
                                </h5>
                                <p className='card-text text-secondary'>
                                    {item.descr}
                                </p>
                            </div>
                        </div>
                    </div>
            )
        })
        return content;
    }

    const content = services(SERVICES)

  return (
    <section className='services-area' id='services'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center services-title'>
                    <h1 className='text-uppercase title-text'>
                        Why should you hire me?
                    </h1>
                    <p className='para'>
                        Mainly because I am a responsible, executive, communicative guy at the very dawn of strength, and also:
                    </p>
                </div>
            </div>
            <div className='container services-list'>
                <div className='row'>
                    {content}
                </div>
            </div>
        </div>
    </section>
  );
}
