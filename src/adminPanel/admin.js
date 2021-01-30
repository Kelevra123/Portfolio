import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {login} from "../store/actions/auth";


const AdminPanel = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const hist = useHistory()
    const dispatch = useDispatch()



    const Login = async (e) => {
        e.preventDefault()
        if ((email !== '' && email.trim()) && (password !== '' && password.trim())) {
            await dispatch(login(email, password))
            hist.push('/page')
        } else {
            return
        }
    }





    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="d-flex flex-column justify-content-between">
                        <form action="">
                            <div className='py-2'>
                                <label className='admin__label' htmlFor="#login">Login</label>
                                <input
                                    type="text"
                                    id='login'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='py-2'>
                                <label className='admin__label' htmlFor="#password">Password</label>
                                <input
                                    type="password"
                                    id='password'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </form>
                        <button
                            className="btn button primary-button mr-4"
                            onClick={(e) => Login(e)}
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanel
