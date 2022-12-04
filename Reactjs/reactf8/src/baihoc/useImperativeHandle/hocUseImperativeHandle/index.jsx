import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Video from '../video/video';

HocUseImperativeHandle.propTypes = {

};

function HocUseImperativeHandle(props) {

    ///////hoc chua day du
    const videoRef = useRef();

    // useEffect(() => {

    //     console.log(videoRef.current)
    // })

    const handlePlay = () => {

        videoRef.current.play();
    }

    const handlePause = () => {

        videoRef.current.pause();
    }

    return (
        <div>


            <Video ref={videoRef} />


            <button onClick={handlePlay}>play</button>
            <button onClick={handlePause} >pause</button>


        </div>
    );
}

export default HocUseImperativeHandle;