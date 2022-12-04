import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Courses = [

    {

        id: 1,
        name: "HTMl "
    },

    {

        id: 2,
        name: "CSS"
    },

    {

        id: 3,
        name: "php"
    },

]

function BtState2(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");



    const handleSubmit = () => {

        console.log(name, email);


    }
    ////day la twwo way binding : vd vs checked vs checkbox: gan ging vs laravel
    ///radio
    const [checked, setChecked] = useState();

    console.log(checked)

    /////checkbox
    const [checkedBox, setCheckedBox] = useState([]);



    const handleCheckbox = (id) => {

        setCheckedBox(prv => {
            const isCheckedBox = checkedBox.includes(id);

            if (isCheckedBox) {
                return checkedBox.filter(item => item !== id)
            } else {
                return [...prv, id]
            }
        }
        )

    }






    return (
        <div style={{ padding: 32 }}>
            <input

                value={name}
                onChange={e => setName(e.target.value)}
            />

            <input

                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>

            {/* ////radio */}
            {Courses.map(course =>
            (
                <div key={course.id}>
                    <input type="radio"

                        checked={checked === course.id}
                        onChange={() => (setChecked(course.id))}
                    />
                    {course.name}
                </div>

            ))}

            {/* ////checkbox */}
            {Courses.map(course =>
            (
                <div key={course.id}>
                    <input type="checkbox"

                        checked={checkedBox.includes(course.id)}
                        onChange={() => handleCheckbox(course.id)}
                    />
                    {course.name}
                </div>

            ))}




        </div>
    );
}

export default BtState2;