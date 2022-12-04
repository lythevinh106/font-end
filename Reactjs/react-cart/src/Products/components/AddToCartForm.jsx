import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useController } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
AddToCartForm.propTypes = {

};

function AddToCartForm({ onSubmit }) {

    const form = useForm({
        defaultValues: {
            quantity: 1

        },


    });
    const handleSubmit = (data) => {


        // console.log(data)

        const SubmitParent = onSubmit;
        // console.log(SubmitParent);
        SubmitParent(data)

    };



    return (
        <div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <input type="text" name="quantity"  {...form.register("quantity")} label="Email" />
                <button type="submit">buy</button>
            </form>
        </div>
    );
}

export default AddToCartForm;