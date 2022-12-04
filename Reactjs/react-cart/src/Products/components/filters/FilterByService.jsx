import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

FilterByService.propTypes = {

};

function FilterByService({ filter, onChange }) {



    const handleChange = (e) => {
        const { name, checked } = e.target;


        onChange({ [name]: checked })
    };


    return (
        <div>
            <Typography>
                dich vu
            </Typography>
            <ul>
                {[{ value: "isPromotion", label: "dang khuyen mai" }, { value: "isFreeShip", label: "van chuyen mien phi" }].map(service => (
                    <li key={service.value}>


                        {service.value}


                        <input onChange={handleChange} type="checkbox" checked={filter[service.value]} name={service.value} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterByService;