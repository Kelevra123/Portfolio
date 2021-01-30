export const ADD_PORT = 'ADD_PORT'
export const FETCH_PORT = 'FETCH_PORT'
export const UPDATE_PORT = 'UPDATE_PORT'
export const DELETE_PORT = 'DELETE_PORT'

export const addPortfolio = ({title, descr, img1, category}) => {
    return async (dispatch) => {
        const response = await fetch('https://portfolio-b0521-default-rtdb.firebaseio.com/portfolios.json',
                {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            title,
                            descr,
                            img1,
                            category
                        })
                    }
            )
        const resData = await response.json()

        dispatch({
           type: ADD_PORT,
            id: resData.name,
            title: title,
            descr: descr,
            img1: img1,
            category: category
        })
    }
}

export const fetchPortfolio = () => {
    return async (dispatch) => {
        const response = await fetch('https://portfolio-b0521-default-rtdb.firebaseio.com/portfolios.json')

        if (!response.ok) {
            throw new Error('Gbplf')
        }

        const resData = await response.json()
        const loadedProducts = [];

        for (const key in resData) {
            loadedProducts.push(
                {...resData[key], id: key}
            )
        }


        dispatch({
            type: FETCH_PORT,
            portfolio: loadedProducts
        })
    }
}

export const updatePortfolio = ({title, descr, img1, id, category}) => {
    return async (dispatch) => {
        const response = await fetch(`https://portfolio-b0521-default-rtdb.firebaseio.com/portfolios/${id}.json`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    descr,
                    img1,
                    category
                })
            }
        )
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        dispatch({
            type: UPDATE_PORT,
            pid: id,
            newDescr: descr,
            newTitle: title,
            newImg: img1,
            newCategory: category
        })
    }
}

export const deletePortfolio = ({id}) => {
    return async (dispatch) => {
        const response = await fetch(`https://portfolio-b0521-default-rtdb.firebaseio.com/portfolios/${id}.json`,
            {
                method: 'DELETE'
            }
        )
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        dispatch({
            type: DELETE_PORT,
            pid: id
        })
    }
}
