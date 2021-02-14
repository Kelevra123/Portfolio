import React, {useState, useEffect} from "react"
import {useLocation} from "react-router-dom";
import CardsView from "../ui/CardsView";

const Header = ({project}) => {
    return (
        <div className='title project-title__area'>
            <h1 className='title-text text-white text-center bg-dark'>{project.title}</h1>
            <h6 className='title-text__category text-white text-uppercase bg-dark text-center'>{project.category}</h6>
            <p className='para-textarea text-dark my-4 text-start'>{project.descr}</p>
        </div>
    )
}

const ChosenImg = ({img, setImg}) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <img src={img} alt="..." className="img-fluid" onClick={(e) => setImg(e)}/>
                </div>
            </div>
        </div>
    )
}

const PortfolioPage = () => {

    const [chosen, setChosen] = useState(false)
    const [variable, setVariable] = useState(null)
    const [project, setProject] = useState(null)
    const location = useLocation()

    const setImg = (e) => {
        setChosen(prev => !prev)
        setVariable(e.target.currentSrc)
    }

    useEffect(() => {
        if (location.state) {
            setProject(location.state.portfolio)
        }
    }, [location.state])


    const IsChosen = ({setImg, variable, project}) => {
        return (
            chosen ?
                <ChosenImg setImg={(e) => setImg(e)} img={variable}/>
                :
                <CardsView setImg={(e) => setImg(e)} project={project.img1}/>
        )
    }

    return (
        <>
        <div className="container-fluid project-item__preview">
            {project ? <Header project={project}/> : null}
            <div className="d-flex flex-wrap justify-content-around py-5">
                {
                    project ?
                    <IsChosen setImg={(e) => setImg(e)} project={project} variable={variable}/>
                    :
                    <h1>Something goes wrong</h1>
                }
            </div>
        </div>
        </>
    )
}

export default PortfolioPage
