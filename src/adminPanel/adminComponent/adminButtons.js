import React, {useRef} from 'react'

const AdminButtons = ({setCategory, category, setCheck}) => {


    const buttonRef = useRef(null)
    if (buttonRef.current) {
        if (category.category) {
            for (let i=0; i<buttonRef.current.children.length; i++) {
                buttonRef.current.children[i].classList.remove('primary-button')
            }
            let catName = category.category
            buttonRef.current.children[catName].classList.remove('secondary-button')
            buttonRef.current.children[catName].classList.add('primary-button')
        } else {
            for (let i=0; i<buttonRef.current.children.length; i++) {
                buttonRef.current.children[i].classList.remove('primary-button')
            }
        }
    }


    const getActive = (e, value) => {
        if (category.category !== value) {
            for (let i=0; i<buttonRef.current.children.length; i++) {
                buttonRef.current.children[i].classList.remove('primary-button')
            }
            e.target.classList.remove('secondary-button')
            e.target.classList.add('primary-button')
            setCheck(false)
            setCategory(prev => prev = {...prev, category: value})
        }
    }

    return (
        <div className="row justify-content-center" ref={buttonRef}>
            <button
                className='btn button secondary-button text-uppercase mr-4 my-2'
                onClick={(e) => getActive(e,'new')}
                name={'new'}
            >new</button>
            <button
                className='btn button secondary-button text-uppercase mr-4 my-2'
                onClick={(e) => getActive(e, 'native')}
                name={'native'}
            >Native</button>
            <button
                className='btn button secondary-button text-uppercase mr-4 my-2'
                onClick={(e) => getActive(e, 'inWork')}
                name={'inWork'}
            >in Work</button>
            <button
                className='btn button secondary-button text-uppercase mr-4 my-2'
                onClick={(e) => getActive(e, 'descTop')}
                name={'descTop'}
            >desctop</button>
        </div>
        )
}

export default AdminButtons
