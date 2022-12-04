import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form'



InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
};

function InputField(props) {

    const { form, name, label, disabled } = props
    return (

        <Controller
            control={form.control}
            name={name}
            render={({

                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,

            }) => (
                <TextField
                    fullWidth
                    label={label}

                    disabled={disabled}
                />
            )}
        />

    )

}

export default InputField;