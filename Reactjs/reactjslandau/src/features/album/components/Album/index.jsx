import React from 'react';
import PropTypes from 'prop-types';

// album.propTypes = {
    
// };

function Album({album}) {
    return (
        <div className='album'>

            <div><img src={album.thumbnailUrl} alt="" /></div>
            <p>{album.name}</p>
        </div>
    );
}

export default Album;