import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

HocEffect2.propTypes = {

};

function HocEffect2(props) {
    ///TH 2: .useEffect(callback,[])
    /*
    chỉ gọi call back 1 lần sau khi component đc mounted (đc them vào), nó k gọi lại
    
    */

    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").
            then(res => res.json()).then(posts => {

                setPosts(posts)////neu sử dụng TH 1: thì nó sẽ lặp vô hạn vì setPost nó sẽ gọi lại liên tục
                console.log(posts);

            })

    }, [])


    return (


        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <ul>
                {posts.map(post => (

                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

        </div>
    );
}

export default HocEffect2;