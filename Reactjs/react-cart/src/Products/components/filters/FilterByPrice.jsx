import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

FilterByPrice.propTypes = {

};

function FilterByPrice({ onChange }) {

    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prvValues) => ({
            ...prvValues,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        onChange(values)

    }
    return (
        <div>
            <Typography>
                Gias
            </Typography>
            <Box>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                <span>-</span>
                <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
            </Box>
            <Button color="primary"

                onClick={handleSubmit}
            >

                Ap Dung
            </Button>
        </div>
    );
}

export default FilterByPrice;