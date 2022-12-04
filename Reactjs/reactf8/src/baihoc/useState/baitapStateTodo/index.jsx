import React, { useState } from 'react';
import PropTypes from 'prop-types';

BtStateTodo.propTypes = {

};

function BtStateTodo(props) {

    const storageJobs = JSON.parse(localStorage.getItem("jobs"));

    const [jobs, setJobs] = useState(storageJobs ?? [])
    const [job, setJob] = useState('')
    console.log(job)


    const handleSubmit = () => {

        setJobs(prv => {

            const newJobs = [...prv, job]
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJobs)

            return newJobs

        });
        setJob("");
    }

    return (
        <div>
            <input value={job} onChange={e => setJob(e.target.value)} />
            <button onClick={handleSubmit} >Addd</button>



            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>


    );
}

export default BtStateTodo;