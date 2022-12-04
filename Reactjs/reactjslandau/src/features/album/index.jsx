import React from 'react';
import PropTypes from 'prop-types';
import Albumlist from './components/Albumlist';

Albumfeature.propTypes = {
    
};

function Albumfeature(props) {

const albumList=[


    {
        id:1,
        name:"nhac hoa thinh hanh",
        thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/d/4/a/cd4a568bb08c9c9d80bc074fd02144de.jpg"
    },
    {
        id:2,
        name:"rap viet",
        thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/1/1/2/b112f0ed4d6ff1c586562549b19a6841.jpg"
    }
    ,{
        id:3,
        name:"trao luu nhac hot",
        thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/3/4/4/93440b6487193cda617f0c0aa7abe6ce.jpg"
    }
]

    return (
        <div>
            <h2>Co the ban se thich day</h2>

           <Albumlist albumList={albumList}></Albumlist>
        </div>
    );
}

export default Albumfeature;