import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

HocEffect1.propTypes = {

};






/*

để tương tác khi thay đổi dữ liệu của chương trình (thay đổi trong chính cái trang đang chạy)
các bạn
 - vd: update dom
 ,call api,
 listenDomEvent(scroll,resize),
 cleanup(remove lister,
 unSubcribe,clear timer)
*/








function HocEffect1(props) {

    console.log("aasd");
    ///////co 3 truong hop su dung effect
    /*1.useEffect(callback): it xai
       --goi callback mỗi khi component re-render: vd nhu moi khi setTitle(State)
       --goi call back sau khi component them element vao dom
    */

    const [title, setTitle] = useState("");


    useEffect(() => {
        ////lý do viết trong userEffect
        /**
         -vef nguyên tắc những thứ j thay đổi thì sử dụng useEffect(sídeEffect) 
         -về performance:vì cái call back này sẽ đc chạy sau nên nó ưu tiên cái render giao diện
         trước rồi ms thực hiện đoạn này
         
         
        */
        console.log(" giua")


        document.title = title
    })









    ///////note-chung cho 3 TH:
    /*
    -callback cua tat ca truong hop lun dc goi sau khi component mounted(ddc gắn);
    -cleanup function luôn được gọi trước khi component ummouted : để tránh rò rỉ bộ nhớ: đây là bản 18 nên k có
     */


    //--------------////

    // useEffect(() => {

    //     console.log("mounted");/////dc mounted vao trong dom xong moi goi
    // })


    ////////doan nay se dc chajy dau tien xong r moi goi call back
    return (


        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} />

            {console.log("cuoi")}
        </div>
    );
}

export default HocEffect1;