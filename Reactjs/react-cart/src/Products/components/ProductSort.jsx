import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {

};

function ProductSort({ currentSort, onChange }) {
    const handleSortChange = (event, newvalue) => {
        if (onChange) onChange(newvalue);
    }

    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            aria-label="basic tabs example">
            <Tab value={"salePrice:ASC"} label="Gia thap toi cao" />
            <Tab value={"salePrice:DESC"} label="gia cao toi thap" />

        </Tabs>
    );
}

export default ProductSort;