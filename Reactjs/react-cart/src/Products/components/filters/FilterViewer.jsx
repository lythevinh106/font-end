import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Chip } from '@mui/material';

FilterViewer.propTypes = {

};

const FILLTER_LIST = [
    {
        id: 1,
        getLabel: filter => "Giao Hang Mien Phi",
        isActive: filter => filter.isFreeShip,
        isVisible: filter => true,
        isRemovable: true,
        onRemove: filter => { },
        ontoggle: filter => {
            const newFilters = { ...filter };
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip
            } else {
                newFilters.isFreeShip = true
            }
        }

    },
    {
        id: 2,
        getLabel: () => "Co khuyen MAi",
        isActive: () => true,
        isVisible: filter => Object.keys(filter).includes("isPromotion"),
        isRemovable: true,
        onRemove: filter => {

            const newFilter = { ...filter };

            delete newFilter.isPromotion;
            return newFilter

        },
        ontoggle: null

    },
    {
        id: 3,
        getLabel: filter => `Khoang gia tu ${filter.salePrice_gte}- {${filter.salePrice_lte}}`,
        isActive: filter => true,
        isVisible: filter => Object.keys(filter).includes("salePrice_lte") && Object.keys(filter).includes("salePrice_gte"),
        isRemovable: true,
        onRemove: filter => {


            const newFilter = { ...filter };

            delete newFilter.salePrice_gte;
            delete newFilter.salePrice_lte;
            return newFilter

        },
        ontoggle: null

    },

]

function FilterViewer({ filter = {}, onChange = null }) {



    return (
        <div>
            <ul>
                {FILLTER_LIST.filter(x => x.isVisible(filter)).map(x => (
                    <li key={x.id}>
                        <Chip
                            label={x.getLabel(filter)}
                            color={x.isActive(filter) ? "primary" : "default"}
                            clickable={!x.isRemovable}

                            onClick={
                                x.isRemovable ? null : () => {
                                    const newFilter = x.ontoggle(filter);

                                    onChange(newFilter);
                                }}
                            onDelete={x.isRemovable ? () => { } : null}

                        />


                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterViewer;