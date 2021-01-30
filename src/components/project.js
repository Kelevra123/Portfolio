import React, {useState, useEffect, useCallback} from 'react';
import getActive from '../functions/getActive';
import Card from '../ui/card';
import {useDispatch, useSelector} from "react-redux";
import {fetchPortfolio} from "../store/actions/portfolio";


export default function ProjectArea({changePorto}) {

    const [active] = useState('active btn button primary-button text-uppercase ml-4 mr-2')
    const [arr, setArr] = useState([])
    const dispatch = useDispatch()

    const getData = useCallback(() => {
        dispatch(fetchPortfolio())
    }, [dispatch])

    const portfolio = useSelector(state => state.portf.portfolio)

    useEffect(() => {
        getData()
    }, [dispatch, getData])

    const setData = (portfolio) => {
        setArr(portfolio)
    }

    useEffect(() => {
        if (portfolio) {
            setData(portfolio)
        }
    })

  return (
    <section className='project-area' id='portfolio'>
        <div className='container'>
            <div className='project-title pb-5'>
                <h1 className='text-uppercase title-h1'>Recently Done Project</h1>
                <h1 className='text-uppercase title-h1'>Quality Work</h1>
            </div>

            <div className='button-group'>
                <button 
                type='button' 
                className={active} 
                onClick={e => getActive(e, 'all')}>
                    All
                </button>
                <button 
                type='button' 
                className='btn button secondary-button text-uppercase'
                onClick={e => getActive(e, 'new')}>
                    new
                </button>
                <button 
                type='button' 
                className='btn button secondary-button text-uppercase'
                onClick={e => getActive(e, 'native')}>
                    native
                </button>
                <button 
                type='button' 
                className='btn button secondary-button text-uppercase'
                onClick={e => getActive(e, 'inWork')}>
                    in work
                </button>
                <button 
                type='button' 
                className='btn button secondary-button text-uppercase active'
                onClick={e => getActive(e, 'descTop')}>
                    desctop
                </button>
            </div>

            <div className='row grid'>
                <Card changePorto={changePorto} arr={arr}/>
            </div>

        </div>
    </section>
  );
}
