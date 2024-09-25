import { useNavigate } from 'react-router-dom';
import {
    loginFail,
    loginRequest, 
    loginSuccess, 
    clearError,
    registerFail,
    registerRequest,
    registerSuccess,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutSuccess,
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail
} from '../slices/authSlice';

import {
    usersRequest,
    usersSuccess,
    usersFail,
    userRequest,
    userSuccess,
    userFail,
    deleteUserRequest,
    deleteUserSuccess,
    deleteUserFail,
    updateUserRequest,
    updateUserSuccess,
    updateUserFail

} from '../slices/userSlice'
import axios from 'axios';
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest())
        const { data }  = await axios.post(`https://e-commers-back.onrender.com/api/v1/login`,{email,password});
        localStorage.setItem('token',data.token)
        localStorage.setItem('name',data.user.name)
        localStorage.setItem('email',data.user.email)
        localStorage.setItem('id',data.user._id)
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    }

}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}

export const register = (userData) => async (dispatch) => {

    try {
        dispatch(registerRequest())
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        const { data }  = await axios.post(`https://e-commers-back.onrender.com/api/v1/register`,userData, config);
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }

}




export const loadUser =  async (dispatch) => {

    try {
        dispatch(loadUserRequest())
       

        const { data }  = await axios.get(`https://e-commers-back.onrender.com/api/v1/myprofile`,
        {
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        );
        dispatch(loadUserSuccess(data))
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }

}

export const logout =  async (dispatch) => {

    try {
        await axios.get(`https://e-commers-back.onrender.com/api/v1/logout`);
          localStorage.removeItem('token');
          localStorage.removeItem('name');
          localStorage.removeItem('email');
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFail)
    }

}

export const updateProfile = (userData) => async (dispatch) => {

    try {
        dispatch(updateProfileRequest())
        const config = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }

        const { data }  = await axios.put(`https://e-commers-back.onrender.com/api/v1/update`,userData, config);
        dispatch(updateProfileSuccess(data))
    } catch (error) {
        dispatch(updateProfileFail(error.response.data.message))
    }

}

export const updatePassword = (formObject) => async (dispatch) => {

    try {
        dispatch(updatePasswordRequest())
        const config = {
            headers: {
                authorization : localStorage.getItem('token')
            }
        }
        await axios.put(`https://e-commers-back.onrender.com/api/v1/password/change`, formObject, config);
        dispatch(updatePasswordSuccess())
    } catch (error) {
        dispatch(updatePasswordFail(error.response.data.message))
    }

}

export const forgotPassword = (formObject ) => async (dispatch) => {

    try {
        dispatch(forgotPasswordRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data} =  await axios.post(`https://e-commers-back.onrender.com/api/v1/password/forgot`, formObject , config);
        dispatch(forgotPasswordSuccess(data))
    } catch (error) {
        dispatch(forgotPasswordFail(error.response.data.message))
    }

}

export const resetPassword = (formObject, token) => async (dispatch) => {

    try {
        dispatch(resetPasswordRequest())
        const config = {
            headers: {
                authorization : localStorage.getItem('token')
            }
        }
        const { data} =  await axios.post(`https://e-commers-back.onrender.com/api/v1/password/reset/${token}`,formObject, config);
        dispatch(resetPasswordSuccess(data))
    } catch (error) {
        dispatch(resetPasswordFail(error.response.data.message))
    }

}

export const getUsers =  async (dispatch) => {

    try {
        dispatch(usersRequest())
        const { data }  = await axios.get(`https://e-commers-back.onrender.com/api/v1/admin/users`,
        {
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        );
        dispatch(usersSuccess(data))
    } catch (error) {
        dispatch(usersFail(error.response.data.message))
    }

}

export const getUser = id => async (dispatch) => {

    try {
        dispatch(userRequest())
        const { data }  = await axios.get(`https://e-commers-back.onrender.com/api/v1/admin/user/${id}`,
        {
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        );
        dispatch(userSuccess(data))
    } catch (error) {
        dispatch(userFail(error.response.data.message))
    }

}

export const deleteUser = id => async (dispatch) => {

    try {
        dispatch(deleteUserRequest())
        await axios.delete(`https://e-commers-back.onrender.com/api/v1/admin/user/${id}`,
        {
            headers:{
                authorization:localStorage.getItem('token')
            }
        });
        dispatch(deleteUserSuccess())
    } catch (error) {
        dispatch(deleteUserFail(error.response.data.message))
    }

}

export const updateUser = (id, formData) => async (dispatch) => {

    try {
        dispatch(updateUserRequest())
        const config = {
            headers: {
                authorization : localStorage.getItem('token')
            }
        }
        await axios.put(`https://e-commers-back.onrender.com/api/v1/admin/user/${id}`, formData, config);
        dispatch(updateUserSuccess())
    } catch (error) {
        dispatch(updateUserFail(error.response.data.message))
    }

}