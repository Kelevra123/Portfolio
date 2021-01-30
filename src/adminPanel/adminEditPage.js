import React, {useState} from 'react'
import AdminForm from "./adminComponent/adminForm";
import {useDispatch} from "react-redux";
import AdminHeader from "./adminHeader";
import AdminButtons from "./adminComponent/adminButtons";
import AdminPreview from "./adminComponent/adminPreview";
import {addPortfolio} from "../store/actions/portfolio";

const AdminEditPage = () => {

    const [preview, setPreview] = useState({
        title: '',
        descr: '',
        img: []
    })
    const [category, setCategory] = useState(null)

    const dispatch = useDispatch()

    const postPortfolio = (portfolio) => {
        dispatch(addPortfolio(portfolio))
    }


    return (
        <>
            <AdminHeader/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="d-flex flex-column justify-content-center erer">
                            <AdminButtons
                                category={category}
                                setCategory={setCategory}
                            />
                            <AdminForm
                                postPortfolio={(portfolio) => postPortfolio(portfolio)}
                                setPreview={setPreview}
                                preview={preview}
                            />
                        </div>
                    </div>
                </div>
            <AdminPreview preview={preview}/>
        </>
    )
}

export default AdminEditPage
