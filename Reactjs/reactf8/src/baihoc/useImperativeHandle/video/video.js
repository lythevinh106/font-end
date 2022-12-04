import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";

Video.propTypes = {};

function Video(props, ref) {
  ////ref ở đây là của cha truyền xuống

  console.log(ref);
  return (
    <div>
      <video
        ref={ref}
        src="https://uploads.codesandbox.io/uploads/user/419c1b93-7f48-49e4-8dd9-8292e2ea0965/cDbe-video-1.mp4"
        width="280"
        __idm_id__="1449985"
      ></video>
    </div>
  );
}

export default forwardRef(Video);
