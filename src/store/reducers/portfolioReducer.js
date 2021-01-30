import {ADD_PORT, DELETE_PORT, FETCH_PORT, UPDATE_PORT} from '../actions/portfolio.js'

const initialState = {
    portfolio: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PORT :
            const {id, descr, title, img1, category} = action
            const newPort = {
                id: id,
                descr: descr,
                title: title,
                img1: img1,
                category: category
            }
            return {
                ...state,
                portfolio: state.portfolio.concat(newPort)
            }
        case FETCH_PORT:
            return {
                ...state,
                portfolio: action.portfolio
            }
        case UPDATE_PORT:
            const {pid, newDescr, newTitle, newImg, newCategory} = action
            const updatedPort = {
                id: pid,
                descr: newDescr,
                title: newTitle,
                img1: newImg,
                category: newCategory
            }
            const portIndex = state.portfolio.findIndex(one => one.id === action.pid)
            const updatedPortfolio = [...state.portfolio]
            updatedPortfolio[portIndex] = updatedPort
            return {
                ...state,
                portfolio: updatedPortfolio
            }
        case DELETE_PORT:
            return {
                ...state,
                portfolio: state.portfolio.filter(one => one.id !== action.pid)
            }
        default: return state
    }
}
