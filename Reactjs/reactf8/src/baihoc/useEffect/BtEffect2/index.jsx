import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

BtEffect2.propTypes = {

};


/////:useEffect with fake Chat App: lam chat realtime

const lessons = [


    {
        id: 1,
        name: "REact1"
    },

    {
        id: 2,
        name: "REact2"
    },

    {
        id: 3,
        name: "REact3"
    }
]



function BtEffect2(props) {


    const [lessonId, setLessonsId] = useState(1);


    useEffect(() => {

        const handleComment = (e) => {
            console.log(e.detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {

            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }




    }, [lessonId]);

    console.log(lessonId)

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li

                        key={lesson.id}

                        style={{

                            color: lessonId === lesson.id ? `red` : `black`,
                            cursor: "pointer"
                        }}

                        onClick={() => setLessonsId(lesson.id)}
                    >
                        {lesson.name}
                    </li>

                ))}


            </ul>
        </div>
    );
}

export default BtEffect2;