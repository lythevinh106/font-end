import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import { TextField } from '@mui/material';



InputFiled.propTypes = {

};

function InputFiled(props) {
    const { name, id, form, label, type } = props
    const { errors, isDirty, isSubmitting, touchedFields, submitCount } = form.formState
    const hasError = Boolean(errors[name] && touchedFields[name]);
    // console.log(errors[name]);
    // console.log(hasError);
    console.log(touchedFields);
    // console.log("toched ", isDirty[name]);

    const field = {
        type,
        id,
        label
    }

    return (
        // <Controller
        //     name={name}

        //     control={form.control}
        //     render={() =>

        //         <TextField error={hasError}

        //             helperText={errors[name]?.message}

        //             {...field}
        //         />
        //     }



        // />


        <TextField error={hasError}
            helperText={touchedFields[name] && (errors[name]?.message)}
            {...form.register(name)}
            {...field} />



    );
}

export default InputFiled;