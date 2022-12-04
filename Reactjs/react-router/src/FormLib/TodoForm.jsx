import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../form-controls/inputField';
import { useForm } from 'react-hook-form';


TodoForm.propTypes = {
    onsubmit: PropTypes.func

};

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title: "",
        },

    })


    const handleSubmit = (values) => {
        console.log("Todo Form", values)
    }
    return (
        <div>
            TodoForm

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Todo" form={form} />
            </form>

        </div>
    );
}

export default TodoForm;