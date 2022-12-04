import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import FilterByCategory from './filters/FilterByCategory';
import FilterByPrice from './filters/FilterByPrice';
import FilterByService from './filters/FilterByService';

ProductFilter.propTypes = {

};

function ProductFilter({ filter, onChange }) {

    const handleCategoryChange = (newCategoryId) => {
        console.log(newCategoryId);
        // if (!onchange) return;


        const newFilters = {
            ...filter,
            'category.id': newCategoryId
        }

        onChange(newFilters);

    };




    const handleChange = (values) => {

        // if (!onchange) return;


        const newFilters = {
            ...filter,
            ...values

        }

        // console.log(values)
        onChange(newFilters);

    };



    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            {/* <FilterByPrice onChange={handlePriceChange} /> */}
            <FilterByPrice onChange={handleChange} />
            <FilterByService filter={filter} onChange={handleChange} />

        </Box>
    );
}

export default ProductFilter;