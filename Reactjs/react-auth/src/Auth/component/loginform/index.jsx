import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useController } from "react-hook-form";
import InputFiled from '../registerForm/inputfield';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '@mui/material';





function LoginForm(propSubmit) {




    const schema = yup.object({
        email: yup.string().required(" vui long k duoc bo trong o nay")
            .min(5, "du lieu o nay qua ngan"),
        password: yup.string().required(" mat khau k dc b trong")
            .min(6, "du lieu o nay phai tu 3 ki tu"),


    }).required();
    const form = useForm({
        defaultValues: {

            password: '',
            email: '',

        },
        resolver: yupResolver(schema)
    });




    const onSubmit = async (data) => {

        const { onSubmit } = propSubmit;

        if (onSubmit) {
            // console.log(data)

            //vi tren coponent cha cuar no la async f neen
            // phai bat no doi cho nay xong r moi thuc thi tiep
            await onSubmit(data);

        }
    };
    const { isSubmitting } = form.formState
    console.log(isSubmitting);




    return (






        <form onSubmit={form.handleSubmit(onSubmit)}>
            <h1>Dang nhap</h1>


            <InputFiled name="email" id="email" form={form} label="email" type="text" />
            <InputFiled name="password" id="password" form={form} label="password" type="text" />

            <Button disabled={isSubmitting} type="submit">Dang nhap</Button>


            {/* <button type="submit">Submit</button> */}
        </form>

    );
}

export default LoginForm;