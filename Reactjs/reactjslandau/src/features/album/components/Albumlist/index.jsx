import React from 'react';
import PropTypes from 'prop-types';
import Album from "../Album"


Albumlist.propTypes = {
    albumList:PropTypes.array.isRequired
};

function Albumlist({albumList}) {
    return (
       <ul>
           {albumList.map(album=>(

                 <li key={album.id}>
                         <Album album={album} />
                 </li>
           ))}
       </ul>
    );
}

export default Albumlist;