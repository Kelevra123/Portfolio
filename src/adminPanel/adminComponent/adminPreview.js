import React from 'react'

const AdminPreview = ({preview}) => {

    const {title, descr, img1} = preview

    const view = (arr) => {
        let items
        items = arr.map(item => {
            if (item !== '' && item.trim()){
                return (
                    <div key={Math.random()} className="col-lg-4 my-2">
                        <img src={item} alt="Check your url" className="img-fluid"/>
                    </div>
                )
            } else {
                return items
            }
        })
        return items
    }

    const content = view(img1)

    return (
        <div className="container">
            <h1 className="title">{title}</h1>
            <p className="para">{descr}</p>
            <div className="row">
                {content}
            </div>
        </div>
    )
}

export default AdminPreview
