import React, {useCallback, useContext, useEffect, useState} from 'react'
import './App.css';
import MainArea from './components/mainArea';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PortfolioPage from "./components/portfolioPage";
import AdminPanel from "./adminPanel/admin";
import AdminPage from "./adminPanel/adminPage";
import {useSelector} from "react-redux";
import AdminGalery from "./adminPanel/adminGalery";
import AdminEditPage from "./adminPanel/adminEditPage";
import {useCookies} from "react-cookie";

function App() {
    const token = useSelector(state => state.auth.token)
    const [auth, setAuth] = useState(false)
    const expiresIn = useSelector(state => state.auth.expiresIn)
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'expirationTime'])
    const expirationTime = expiresIn * 1000

    const getAccess = useCallback ((component) => {
        if (cookies.token) {
            return (component)
        } else {
            return (<Redirect to={'/admin'}/>)
        }
    }, [cookies])


    const authOff = useCallback ((timer) => {
        removeCookie('token')
        setAuth(false)
        clearInterval(timer)
        getAccess(<AdminGalery/>)
    }, [getAccess, removeCookie])

    useEffect(() => {
        if (token) {
            setCookie('token', token)
            setCookie('expirationTime', expirationTime)
            setAuth(true)
        }
    }, [token, setCookie, expirationTime])

    useEffect(() => {
        if (auth) {
            const timer = setTimeout(() => {
                authOff(timer)
            }, cookies.expirationTime)
        }
    })

    useEffect(() => {
        if (cookies.token) {
            setAuth(true)
        }
    }, [setAuth, cookies])



  return (
      <Router>
        <div className="App">
          <Switch>
              <Route
                  render={(props) =>
                      <MainArea
                          props={props}
                      />}
                    exact={true}
                    path='/'/>
              <Route
                  render={(props) =>
                      <PortfolioPage
                          props={props}
                          />}
                  path='/porto'/>
              <Route
                  render={(props) =>
                      <AdminPanel
                          rops={props}/>}
                  path='/admin'/>
              <Route
                  render={(props) => getAccess(<AdminPage props={props}/>)}
                  path='/page'/>
              <Route
                  render={(props) => getAccess(<AdminGalery props={props}/>)}
                  path='/galery'/>
              <Route
                  render={(props) => getAccess(<AdminEditPage props={props}/>)}
                  path='/edit'/>
              <Route
                render={(props) =>
                    <PortfolioPage
                        props={props}/>}
                path='/project'
              />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
