import React from "react";

const CardView = ({project, setImg}) => {
    let content
    const sizeCheck = project.filter(img => img.length !== '' && img.trim())
    let imgClass = 'col-lg-12 my-4 text-center px-2'
    if (sizeCheck.length < 4) {
        imgClass = 'col-lg-4 my-4 text-center px-2'
    }
    if (sizeCheck.length > 3 && sizeCheck.length < 6) {
        imgClass = 'col-lg-2 my-4 text-center px-2'
    }
    if (sizeCheck.length === 6) {
        imgClass = 'col-lg-3 my-4 text-center mx-2'
    }
    if (sizeCheck.length > 6) {
        imgClass = 'col-lg-3 my-4 text-center mx-2 px-2'
    }
    if (sizeCheck.length > 8) {
        imgClass = 'col-lg-2 my-4 text-center px-2'
    }
    content = project.map(item => {

        if (item !== '' && item.trim) {
            return (
                <div key={item + Math.random()} className={imgClass}>
                    <img
                        src={item} alt="..."
                        className="img-fluid project-item__img card-img__shadow"
                        onClick={(e) => setImg(e)}
                    />
                </div>
            )
        }
        return content
    })
    return content
}

export default CardView
