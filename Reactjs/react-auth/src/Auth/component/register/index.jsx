import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../registerForm';

import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../../userSlice';
import { useSnackbar } from 'notistack';

Register.propTypes = {

};

function Register(props) {
    const { enqueueSnackbar } = useSnackbar();

    // const showNoti = () => {

    // };
    const dispatch = useDispatch();


    const handleSubmit = async (data) => {
        try {

            // data.username = data.email
            // console.log(data);
            const newData = {
                username: data.email,
                email: data.email,
                password: data.password,
                fullName: data.fullName
            }
            console.log(newData);
            const action = register(
                newData
                // email: 'lythevinh@gmail.com',
                // username: 'lythevinh@gmail.com', // same as email
                // password: '123123', // min length 6
                // fullName: 'Easy Frontend'
            );
            const resultAction = await dispatch(action);
            //ham unwrap giup lay ket qua  or dua ra neu bi loi
            const user = unwrapResult(resultAction)
            console.log(user);

            enqueueSnackbar("register  success", { variant: "success" });

        } catch (error) {
            console.log("failed", error.message);
            enqueueSnackbar(error.message, { variant: "error" });

        }


    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;