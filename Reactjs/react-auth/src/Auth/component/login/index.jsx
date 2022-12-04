import React from 'react';
import PropTypes from 'prop-types';


import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { login, register } from '../../userSlice';
import { useSnackbar } from 'notistack';
import LoginForm from '../loginform';

Login.propTypes = {

};

function Login(props) {
    const { enqueueSnackbar } = useSnackbar();

    // const showNoti = () => {

    // };
    const dispatch = useDispatch();


    const handleSubmit = async (data) => {
        try {

            // data.username = data.email
            // console.log(data);
            const newData = {

                email: data.email,
                password: data.password,

            }
            // console.log(data);
            const action = login({
                identifier: data.email,
                password: data.password,
            });
            const resultAction = await dispatch(action);
            //ham unwrap giup lay ket qua  or dua ra neu bi loi
            const user = unwrapResult(resultAction)
            console.log(user);

            // enqueueSnackbar("register  success", { variant: "success" });

        } catch (error) {
            console.log("failed", error.message);
            enqueueSnackbar(error.message, { variant: "error" });

        }


    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div >
    );
}

export default Login;