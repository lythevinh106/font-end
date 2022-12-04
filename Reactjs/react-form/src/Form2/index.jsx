import React from 'react';
import PropTypes from 'prop-types';
import Form from './Component/Form';

Form2.propTypes = {

};


function Form2(props) {
    ////data o day duoc truyen tu con len
    const handleFomr2Submit = (data) => {
        console.log(data);
        ///da nhan dc data va xu li tiep nhu Api....

    }

    return (
        <div>
            <Form onSubmit={(e) => {
                handleFomr2Submit(e)
            }} />
        </div>
    );
}

export default Form2;