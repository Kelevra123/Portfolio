import React, {useRef} from 'react'
import {useHistory} from "react-router-dom";

const AdminForm = ({preview, setPreview, postPortfolio, editMode, editPortfolio, check, setCheck}) => {

    const formRef = useRef(null)
    const historyM = useHistory()


    const addPort = (e, item) => {
        e.preventDefault()
        const {title, descr, img1, category} = item
        if (title === '' || descr === '' || img1.length === 0 || !category) {
            alert('Click on Preview to see is everything ok')
            return
        }
        if (!check) {
            setCheck(false)
            alert('Click on Preview to see is everything ok')
            return
        }
        const obj = {title, descr, img1: img1, category: category}
        const empty = {title: '', descr: '', img1: [], category: null}
        formRef.current.reset()
        setPreview(empty)
        postPortfolio(obj)
    }

    const editPort = (e, item) => {
       e.preventDefault()
        const {title, descr, img1, id, category} = item
        if (!check) {
            setCheck(false)
            alert('Click on Preview to see is everything ok')
            return
        }
        const obj = {title, descr, img1: img1, id, category}
        const empty = {title: '', descr: '', img1: [], id: '', category: null}
        formRef.current.reset()
        setPreview(empty)
        editPortfolio(obj)
        historyM.push('/galery')
    }

    const accept = (e) => {
        e.preventDefault()
        const {target} = e
        const {name, descr, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12} = target
        const {category} = preview
        if ((name.value === '' && !name.value.trim()) || (descr.value === '' && !descr.value.trim()) || !category) {
            alert('Fields: Title and Description are required. And need to choose category')
            return
        }
        setPreview(prev => {
            prev = {
                ...prev,
                title: name.value,
                descr: descr.value,
                img1: [
                    img1.value,
                    img2.value,
                    img3.value,
                    img4.value,
                    img5.value,
                    img6.value,
                    img7.value,
                    img8.value,
                    img9.value,
                    img10.value,
                    img11.value,
                    img12.value
                ],
                category: category
            }
            return prev
        })
    }

    return (
        <form action="" onSubmit={(e) => accept(e)} ref={formRef}>
            <div>
                <label className='admin__label' htmlFor="#chngName">Name</label>
                <input
                    className='admin__input mx-2 my-1'
                    type="text"
                    id='chngName'
                    placeholder='Project name'
                    name='name'
                    defaultValue={preview.title}
                    onChange={() => setCheck(false)}
                />
            </div>
            <div>
                <label className='admin__label' htmlFor="#descr">Description</label>
                <textarea
                    className='admin__input mx-2 my-1'
                    id='descr'
                    placeholder='Stack of tech'
                    name='descr'
                    defaultValue={preview.descr}
                    onChange={() => setCheck(false)}
                    rows={5}
                />
            </div>
            <div className='d-flex flex-wrap flex-column'>
                <label className='admin__label' htmlFor="#imgs">Images</label>
                <input
                    className='admin__input mx-2 my-1'
                    type="text" id='imgs'
                    placeholder='url: https://googlepiks.com/1'
                    name='img1'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[0]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text"
                    placeholder='url: https://googlepiks.com/1'
                    name='img2'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[1]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text"
                    placeholder='url: https://googlepiks.com/1'
                    name='img3'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[2]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text"
                    placeholder='url: https://googlepiks.com/1'
                    name='img4'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[3]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text"
                    placeholder='url: https://googlepiks.com/1'
                    name='img5'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[4]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text" id='imgs'
                    placeholder='url: https://googlepiks.com/1'
                    name='img6'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[5]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text" id='imgs'
                    placeholder='url: https://googlepiks.com/1'
                    name='img7'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[6]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text" id='imgs'
                    placeholder='url: https://googlepiks.com/1'
                    name='img8'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[7]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text" id='imgs'
                    placeholder='url: https://googlepiks.com/1'
                    name='img9'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[8]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text" id='imgs'
                    placeholder='url: https://googlepiks.com/1'
                    name='img10'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[9]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text" id='imgs'
                    placeholder='url: https://googlepiks.com/1'
                    name='img11'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[10]}
                />
                <input
                    className='admin__input mx-2 my-1'
                    type="text" id='imgs'
                    placeholder='url: https://googlepiks.com/1'
                    name='img12'
                    onChange={() => setCheck(false)}
                    defaultValue={preview.img1[11]}
                />
            </div>
            <div className='d-flex justify-content-center'>
                {editMode
                    ? <button
                        className="btn button primary-button mr-4 my-2"
                        onClick={(e) => editPort(e, preview)}
                    >
                        EDIT
                    </button>
                    :
                    <button
                    className="btn button primary-button mr-4 my-2"
                    onClick={(e) => addPort(e, preview)}
                    >
                        ADD
                    </button>}
                <button
                    type='submit'
                    className="btn button primary-button mr-4 my-2"
                    onClick={() => setCheck(true)}
                >PREVIEW</button>
            </div>
        </form>
    )
}

export default AdminForm
