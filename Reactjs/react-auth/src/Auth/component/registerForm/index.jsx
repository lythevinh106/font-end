import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useController } from "react-hook-form";
import InputFiled from './inputfield';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '@mui/material';





function RegisterForm(propSubmit) {




    const schema = yup.object({
        fullName: yup.string().required(" vui long k duoc bo trong o nay")
            .min(5, "du lieu o nay qua ngan"),
        password: yup.string().required(" mat khau k dc b trong")
            .min(6, "du lieu o nay phai tu 3 ki tu"),
        rePassword: yup.string().required(" mat khau k dc b trong")
            .min(6, "du lieu o nay phai tu 3 ki tu").oneOf([yup.ref("password")], "password k trung"),

    }).required();
    const form = useForm({
        defaultValues: {
            fullName: '',
            password: '',
            email: '',
            rePassword: '',
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
            <h1>Dang ki</h1>

            <InputFiled name="fullName" id="fullName" form={form} label="fullName" type="text" />
            <InputFiled name="email" id="email" form={form} label="email" type="text" />
            <InputFiled name="password" id="password" form={form} label="password" type="text" />
            <InputFiled disabled={isSubmitting} name="rePassword" id="rePassword" form={form} label="rePassword" type="text" />
            <Button disabled={isSubmitting} type="submit">Dang ki</Button>


            {/* <button type="submit">Submit</button> */}
        </form>

    );
}

export default RegisterForm;