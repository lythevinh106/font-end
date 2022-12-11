import React, { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

HocUseMemo1.propTypes = {

};

function HocUseMemo1(props) {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const nameRef = useRef()/// lấy ra cái El Của input
    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: Number(price)
        }])


        setName("");
        setPrice("");
        nameRef.current.focus();////là đưa con trỏ chuột vào
    };



    // /////k sử dụng MEmo
    // const total = products.reduce((result, prod) => {

    //     /**
    //       vì đoạn này lun lun được gọi mỗi khi cái này đc render lại điển hình như khi nhập

    //       vào ô input thì nó vẫn thực hiện đoạn này nên thành ra bị thừa
    //      */

    //     console.log("tinh toan");
    //     return result + prod.price
    // }, 0);




    // ///// sử dụng MEmo
    ////mỗi khi render nó check xem cái products có thay đổi hay k thi nó ms chạy chỗ này
    //// cú pháp y chang Effect

    const total = useMemo(() => {

        const result = products.reduce((result, prod) => {



            console.log("tinh toan");
            return result + prod.price
        }, 0);

        return result
        //////use memo thuong su dung de tinh toan khac vs useeffect
    }, [products]);////khi cái products này có sự thay đổi thì ms làm, or mun su dung 1 lan []


    return (
        <div className="App">
            <input
                ref={nameRef}
                value={name}
                placeholder="enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                value={price}
                placeholder="enter price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                Total:{total}
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>)
}

export default HocUseMemo1;