/// https://backendlivmo.onrender.com/api/v1/login
/// https://backendlivmo.onrender.com/api/v1/register

import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    HOSTREGISTER_USER_REQUEST,
    HOSTREGISTER_USER_SUCCESS,
    HOSTREGISTER_USER_FAIL,
    ORGANISMREGISTER_USER_REQUEST,
    ORGANISMREGISTER_USER_SUCCESS,
    ORGANISMREGISTER_USER_FAIL,
    TRADERREGISTER_USER_REQUEST,
    TRADERREGISTER_USER_SUCCESS,
    TRADERREGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    HOSTUPDATE_PROFILE_REQUEST,
    HOSTUPDATE_PROFILE_SUCCESS,
    HOSTUPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    UPDATE_EMAIL_REQUEST,
    UPDATE_EMAIL_SUCCESS,
    UPDATE_EMAIL_FAIL,
    VALIDATION_REQUEST,
    VALIDATION_SUCCESS,
    VALIDATION_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants'
import axiosInstance from '../AxiosInstance'



// Validation
export const Validation = (userData, activationCode) => async (dispatch) => {
    try {
        dispatch({ type: VALIDATION_REQUEST })
       //const { data } = await axios.post(`https://backendlivmo.onrender.com/api/v1/verifyuser/${activationCode}`, userData)
        const reponse = await axiosInstance.post(`/verifyuser/${activationCode}`,  userData)
        dispatch({
            type: VALIDATION_SUCCESS,
            payload: reponse.data.user,

        })
    } catch (error) {
        dispatch({
            type: VALIDATION_FAIL,
            payload: error.response.data.message
        })
    }
}


// Login
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST })

        const config = {
            withCredentials: true,
        }
        /// https://backendlivmo.onrender.com/api/v1/login
      //  const reponse = await axios.post('http://localhost:3000/api/v1/login', { email, password }, config)

       const reponse = await axiosInstance.post('/login', { email, password })

        localStorage.setItem('authToken', reponse.data.token)


        dispatch({
            type: LOGIN_SUCCESS,
            payload: reponse.data.token

        })
        console.log(reponse.data)
        localStorage.setItem('userInfo', JSON.stringify(reponse.data.user))
        //  localStorage.setItem('authToken', data.token)
        //localStorage.setItem('userInfo',JSON.stringify(data))
        // window.location.href='/'



    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

// Register user
export const Register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

       // const { data } = await axios.post('https://backendlivmo.onrender.com/api/v1/register', userData, config)
       const reponse = await axiosInstance.post('/register', userData)
        //const { data } = await axios.post('', userData, config)
        console.log(reponse.data.user)
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: reponse.data.user

        })
        console.log(reponse.data.user)

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Host Register user
export const HostRegister = (userData) => async (dispatch) => {
    try {

        dispatch({ type: HOSTREGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const reponse = await axiosInstance.post('/hostregister', userData)
       // const { data } = await axios.post('https://backendlivmo.onrender.com/api/v1/hostregister', userData, config)

        dispatch({
            type: HOSTREGISTER_USER_SUCCESS,
            payload: reponse.data.user
        })

    } catch (error) {
        dispatch({
            type: HOSTREGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

//  RegisterHost user

export const updateToHostProfile = (userData) => async (dispatch) => {
    try {

        dispatch({ type: HOSTUPDATE_PROFILE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.put('https://backendlivmo.onrender.com/api/v1/registerhost', userData, config)

        dispatch({
            type: HOSTUPDATE_PROFILE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: HOSTUPDATE_PROFILE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Register organism

export const RegisterOrganism = (userData) => async (dispatch) => {
    try {

        dispatch({ type: ORGANISMREGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('http://localhost:3000/api/v1/organism/register', userData, config)

        dispatch({
            type: ORGANISMREGISTER_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: ORGANISMREGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Register Trader

export const registerTrader = (userData) => async (dispatch) => {
    try {

        dispatch({ type: TRADERREGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }


        const { data } = await axios.post('http://localhost:3000/api/v1/traderregister', userData, config)

        dispatch({
            type: TRADERREGISTER_USER_SUCCESS,
            payload: data.user
        })


    } catch (error) {
        dispatch({
            type: TRADERREGISTER_USER_FAIL,
            payload: error.response.data.message

        })

    }
}


// Load user
export const loadUser = () => async (dispatch) => {
    try {

        dispatch({ type: LOAD_USER_REQUEST })

        // {
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('authToken') ?? ''}`,
        //     }
        // }
        const response = await axiosInstance.get('/me')
        // const response = await axios.get('http://localhost:3000/api/v1/me', {
        //     withCredentials: true,
        // })

        console.log(response.data)
        console.log("hey2223")   // ici error 
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: response.data.user
        })

    } catch (error) {
        console.log(error.message)

        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response?.data.message
        })
    }
}

// Update profile
export const updateProfile = (userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PROFILE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.put('http://localhost:3000/api/v1/me/update', userData, config)

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update password
export const updatePassword = (passwords) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PASSWORD_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put('http://localhost:3000/api/v1/password/update', passwords, config)

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Forgot password
export const forgotPassword = (email) => async (dispatch) => {
    try {

        dispatch({ type: FORGOT_PASSWORD_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/password/forgot', email, config)

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Reset password
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PASSWORD_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/password/reset/${token}`, passwords, config)

        dispatch({
            type: NEW_PASSWORD_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Logout user
export const logout = () => async (dispatch) => {
    try {

        await axios.get('/api/v1/logout')

        dispatch({
            type: LOGOUT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get all users
export const allUsers = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_USERS_REQUEST })

        const { data } = await axios.get('/api/v1/admin/users')

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.users
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update user - ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/user/${id}`, userData, config)

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get user details - ADMIN
export const getUserDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: USER_DETAILS_REQUEST })


        const { data } = await axios.get(`/api/v1/admin/user/${id}`)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete user - ADMIN
export const deleteUser = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_USER_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/user/${id}`)

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}


// Update password
export const updateEmail = (emails) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_EMAIL_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put('/api/v1/email/update', emails, config)

        dispatch({
            type: UPDATE_EMAIL_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_EMAIL_FAIL,
            payload: error.response.data.message
        })
    }
}