import React, {useState, useEffect} from "react"
import {useLocation} from "react-router-dom";

const View = ({project, setImg}) => {
    let content
    const sizeCheck = project.img1.filter(img => img.length !== '' && img.trim())
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
    content = project.img1.map(item => {

        if (item !== '' && item.trim) {
            return  (
                <div key={item + Math.random()} className={imgClass}>
                    <img
                        src={item} alt="..."
                        className="img-fluid project-item__img asss"
                        onClick={(e) => setImg(e)}
                    />
                </div>
            )
        }
        return content
    })
        return content
}

const Header = ({project}) => {
    return (
        <div className='title text-center text-white project-title__area'>
            <h1 className='title-text'>{project.title}</h1>
            <h6 className='title-text__category text-uppercase'>{project.category}</h6>
            <p className='para my-4 text-white'>{project.descr}</p>
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
                <View setImg={(e) => setImg(e)} project={project}/>
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
