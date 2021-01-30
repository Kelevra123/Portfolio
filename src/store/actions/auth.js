export const LOGIN = 'LOGIN'

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCuGFWcCb6kZVzLW4mRH9pugCKqER-ZfGA' ,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            })
        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Somthing went wrong!'
            if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!';
            }
            if (errorId === 'INVALID_PASSWORD') {
                message = 'This password is not valid!'
            }
            alert(message);
            return
        }
        const resData = await response.json()

        dispatch({
            type: LOGIN,
            token: resData.idToken,
            expiresIn: resData.expiresIn
        })
    }
}
