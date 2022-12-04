import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useController } from "react-hook-form";
import InputFiled from '../inputfield';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

Form.propTypes = {

};



function Form(propSubmit) {
    const schema = yup.object({
        name: yup.string().required(" vui long k duoc bo trong o nay")
            .min(5, "du lieu o nay qua ngan"),
        password: yup.string().required(" mat khau k dc b trong")
            .min(6, "du lieu o nay phai tu 3 ki tu"),

    }).required();
    const form = useForm({
        defaultValues: {
            name: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {

        const { onSubmit } = propSubmit;

        if (onSubmit) {
            console.log(data)
            onSubmit(data);

        }
    };

    return (

        <form onSubmit={form.handleSubmit(onSubmit)}>
            <h1>React Hook Form</h1>
            {/* <label htmlFor="name">Name</label> */}
            <InputFiled name="name" id="name" form={form} label="name" type="text" />
            <InputFiled name="password" id="password" form={form} label="password" type="text" />

            {/*   <label htmlFor="password">Password</label>
           <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                {...form.register("password")}

            />
            <label htmlFor="email">Email</label>
            <input name="email" id="email" placeholder="Your Email"   {...form.register("email")} /> */}

            <ul className="error-container">
                <li>Name is required</li>
            </ul>

            <button type="submit">Submit</button>
        </form>

    );
}

export default Form;