import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

HocEffect3.propTypes = {

};

const tabs = ["posts", "comments", "albums"]



function HocEffect3(props) {
    ///TH 3: .useEffect(callback,[dep])
    /*
-call back sẽ được gọi lại mỗi khi deps thay đổi
    
    */

    // const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);

    const [type, setType] = useState("posts");

    const [showGoToTop, setShowGoTotop] = useState(false);


    // console.log("dau");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`).
            then(res => res.json()).then(posts => {

                setPosts(posts)////neu sử dụng TH 1: thì nó sẽ lặp vô hạn vì setPost nó sẽ gọi lại liên tục


            })
        // console.log("giua");
    }, [type])////se dc goi lại mỗi khi type thay đổi
    ////hàm dọn dẹp (nếu có) sẽ chạy trước khi cái call back ở trên chạy



    ///////sử dụng với dom event

    useEffect(() => {

        const handleScroll = () => {

            setShowGoTotop(window.scrollY >= 200);
            /*
            
            nếu đúng thì nó sẽ render lại liên tục nhưng react nó hỗ trợ so sánh ===
            nếu dữ liệu k thay đổi thì nó sẽ k re render
            */





            ///đây là cleanup function : hàm dọn dẹp tránh rò rỉ bộ nhớ sau khi unmouted rồi lại mounted lại
            /// được gọi trước khi component đó đc unmouted
            /// cái này lun được gọi trước khi call back được gọi(trừ lần đc mouted (tức là lần đầu tiên))
            /////vì đây la bản 18 nên k có cái này
            return () => {

                console.log("ham don dep");

                window.removeEventListener("scroll", handleScroll);

            }
        }


        window.addEventListener("scroll", handleScroll);
    }, [])

    return (


        <div>
            {showGoToTop && (
                <button
                    style={{
                        position: "fixed",
                        right: "200",
                        bottom: "20",
                        color: "red"
                    }}

                >GotoTOp</button>
            )}


            {tabs.map(tab => (

                <button key={tab}
                    style={type == tab ? { color: "red" } : {}}
                    onClick={() => setType(tab)}
                >

                    {tab}
                </button>


            ))}
            {/* {console.log("cuoi")} */}
            <ul>
                {posts.map(post => (

                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>



        </div>
    );
}

export default HocEffect3;