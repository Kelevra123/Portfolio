import React from 'react'
import CardsView from "../../ui/CardsView";

const AdminPreview = ({preview}) => {

    const {title, descr, img1} = preview

    return (
        <div className="container">
            <h1 className="title">{title}</h1>
            <p className="para-textarea">{descr}</p>
            <div className="row">
                <div className="d-flex flex-wrap justify-content-around py-5">
                <CardsView project={img1} setImg={() => {}}/>
                </div>
            </div>
        </div>
    )
}

export default AdminPreview
