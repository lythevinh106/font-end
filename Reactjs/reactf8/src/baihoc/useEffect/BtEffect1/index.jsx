import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

BtEffect1.propTypes = {

};

function BtEffect1(props) {



    const [avatar, setAvatar] = useState();


    useEffect(() => {


        ////
        return () => {
            ////kieme tra xem neu chon anh lan 2 thi xoa lun cai anh truoc khoi bo nho de tranh ro ri bo nho
            avatar && URL.revokeObjectURL(avatar.preview)


        }
    }, [avatar])

    const handelPreviewAvatar = (e) => {

        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        // console.log(filePreview);

        setAvatar(file);
    }
    return (



        <div>
            <input type="file"
                onChange={handelPreviewAvatar}

            />



            {
                avatar && (
                    <img src={avatar.preview} width="80%" />
                )
            }
        </div>
    );
}

export default BtEffect1;