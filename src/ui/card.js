import React from 'react';
import {Link} from "react-router-dom";

export default function Card({arr, token, deletePorto}) {


    const content = arr.map(item => {
        const classItem = `col-lg-4 col-md-6 col-sm-12 my-3 element-item ${item.category}`

    let face = item.img1.find(img => img !== '')

  return (
        <div key={item.id} className={classItem}>
            <Link
                to={location => ({...location, pathname: '/project', state: {portfolio: item}})}
            >
                <div className='our-project'>
                    <div className='img text-center'>
                        <img src={face} alt="" className="img-fluid project__img"/>
                    </div>
                    <div className='title py-4 text-center'>
                        <h4 className='text-uppercase'>{item.title}</h4>
                        <span className='text-secondary'>{item.category}</span>
                    </div>
                </div>
            </Link>
            {token ?  <div className='d-flex justify-content-center'>
                <Link
                    className='btn button secondary-button text-uppercase mr-4 my-2'
                    to={location => ({...location, pathname: '/page', state: {id: item.id}})}>
                    Edit
                </Link>
                <button
                    className='btn button secondary-button text-uppercase mr-4 my-2'
                    onClick={() => deletePorto(item)}
                >
                    Delete
                </button>
            </div> : null}
        </div>
    )
  })
  return content
}

