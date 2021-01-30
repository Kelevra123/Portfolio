import React, {useState, useEffect, useCallback} from 'react';
import AdminButtons from "./adminComponent/adminButtons";
import AdminForm from "./adminComponent/adminForm";
import AdminPreview from "./adminComponent/adminPreview";
import {useDispatch, useSelector} from "react-redux";
import {addPortfolio, fetchPortfolio, updatePortfolio} from "../store/actions/portfolio";
import AdminHeader from "./adminHeader";
import {useLocation} from 'react-router-dom'

const AdminPage  = () => {

    const [preview, setPreview] = useState({
        title: '',
        descr: '',
        img1: [],
        id: '',
        category: null
    })
    const [editMode, setEditMode] = useState(false)
    const [pid, setPid] = useState(null)
    const [check, setCheck] = useState(false)
    const location = useLocation()

    const dispatch = useDispatch()
    const getData = useCallback(() => {
        dispatch(fetchPortfolio())
    }, [dispatch])

    const editPort = useSelector(state => state.portf.portfolio.find(one => one.id === pid))
    const getById = (editPort) => {
        setPreview({
            title: editPort.title,
            descr: editPort.descr,
            img1: editPort.img1,
            id: editPort.id,
            category: editPort.category
        })
    }

    useEffect(() => {
        getData()
        if (location.state) {
            setPid(location.state.id)
            setEditMode(true)
        }
    }, [setPid, getData, location.state, setEditMode])

    useEffect(() => {
        if (editPort) {
            getById(editPort)
        }
    }, [editPort])


    const postPortfolio = (portfolio) => {
        dispatch(addPortfolio(portfolio))
    }

    const editPortfolio = (portfolio) => {
        dispatch(updatePortfolio(portfolio))
    }



    return (
        <>
            <AdminHeader editMode={editMode}/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="d-flex flex-column justify-content-center erer">
                       <AdminButtons
                           category={preview}
                           setCategory={setPreview}
                           setCheck={(value) => setCheck(value)}
                       />
                       <AdminForm
                           editMode={editMode}
                           editPortfolio={(portfolio) => editPortfolio(portfolio)}
                           postPortfolio={(portfolio) => postPortfolio(portfolio)}
                           check={check}
                           setCheck={(value) => setCheck(value)}
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

export default AdminPage
