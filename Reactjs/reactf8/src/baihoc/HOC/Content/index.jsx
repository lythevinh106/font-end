import React, { memo } from 'react';
import PropTypes from 'prop-types';

Content.propTypes = {

};

function Content(props) {
    return (
        <div>
            {console.log("day la côpnent con")}
            <h1>Day la coponent Content</h1>
        </div>
    );
}


export default memo(Content);