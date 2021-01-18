import React from 'react';

export default function Card({arr}) {

    const content = arr.map(item => {
        const classItem = `col-lg-4 col-md-6 col-sm-12 element-item ${item.class}`

  return (
        <div key={item.alt} className={classItem}>
            <div className='our-project'>
                <div className='img'>
                    <img src={item.img} alt={item.alt}></img>
                </div>
                <div className='title py-4'>
                    <h4 className='text-uppercase'>{item.title}</h4>
                    <span className='text-secondary'>{item.class}, Portfolio</span>
                </div>
            </div>
        </div>
    )
  })
  return content
}

