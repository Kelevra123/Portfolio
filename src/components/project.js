import React, { useState } from 'react';
import getActive from '../functions/getActive';
import PORTFOLIO from '../img/portfolio/portfolio';
import Card from '../ui/card';


export default function ProjectArea() {

    const [active, setActive] = useState('active btn button primary-button text-uppercase ml-4 mr-2')

  return (
    <section className='project-area' id='portfolio'>
        <div className='container'>
            <div className='project-title pb-5'>
                <h1 className='text-uppercase tetle-h1'>Recently Done Project</h1>
                <h1 className='text-uppercase tetle-h1'>Quality Work</h1>
            </div>

            <div className='button-group'>
                <button 
                type='button' 
                className={active} 
                onClick={e => getActive(e, 'all')}>
                    All
                </button>
                <button 
                type='button' 
                className='btn button secondary-button text-uppercase'
                onClick={e => getActive(e, 'popular')}>
                    popular
                </button>
                <button 
                type='button' 
                className='btn button secondary-button text-uppercase'
                onClick={e => getActive(e, 'latest')}>
                    Latest
                </button>
                <button 
                type='button' 
                className='btn button secondary-button text-uppercase'
                onClick={e => getActive(e, 'following')}>
                    Following
                </button>
                <button 
                type='button' 
                className='btn button secondary-button text-uppercase active'
                onClick={e => getActive(e, 'upcomming')}>
                    Upcomming
                </button>
            </div>

            <div className='row grid'>
                <Card arr={PORTFOLIO}/>
            </div>

        </div>
    </section>
  );
}
