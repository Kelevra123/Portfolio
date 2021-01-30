import React, {useEffect} from 'react'
import AdminHeader from "./adminHeader";
import Card from "../ui/card";
import {useDispatch, useSelector} from "react-redux";
import {deletePortfolio, fetchPortfolio} from "../store/actions/portfolio";
import {useCookies} from "react-cookie";


const AdminGalery = () => {

    const [cookies] = useCookies()

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPortfolio())
    }, [dispatch])



    const deletePorto = (item) => {
        if (window.confirm('Delete this?')) {
            dispatch(deletePortfolio(item))
        }
    }

    const galeryItems = useSelector(state => state.portf.portfolio)

    return (
        <>
        <AdminHeader/>
        <div className="container">
            <div className="row">
                    <Card token={cookies.token} deletePorto={(item) => deletePorto(item)} arr={galeryItems}/>
            </div>
        </div>
        </>
    )
}
export default AdminGalery
