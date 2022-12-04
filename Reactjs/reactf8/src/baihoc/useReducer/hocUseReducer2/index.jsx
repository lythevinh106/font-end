import React, { useReducer, useRef } from 'react';
import PropTypes from 'prop-types';

HocUseReducer2.propTypes = {

};

/////b1 init state
/// khoiwr tao 2 state
const initJob = {
    job: '',
    jobs: []
}

const SET_ACTION = 'set';
const ADD_ACTION = 'add';
const REMOVE_ACTION = 'remove';

const setJob = payload => {
    return {
        type: SET_ACTION,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_ACTION,
        payload
    }
}
const delJob = payload => {
    return {
        type: REMOVE_ACTION,
        payload
    }
}
let newState

const reducerTodo = (value, action) => {
    let newState

    switch (action.type) {
        case SET_ACTION:
            newState = {
                ...value,
                job: action.payload///ghi de lai
            }
            break;
        case ADD_ACTION:
            newState = {
                ...value,
                jobs: [...value.jobs, action.payload]
            }
            break;
        case REMOVE_ACTION:
            const newJobs = [...value.jobs]
            newJobs.splice(action.payload, 1)

            newState = {
                ...value,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid Action')
    }
    
    return newState
}

function HocUseReducer2(props) {
    let [state, dispatch] = useReducer(reducerTodo, initJob)
    const { job, jobs } = state
    let inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return <div style={{ margin: '40px' }}>
        <h3>Todo</h3>
        <input
            ref={inputRef}
            value={job}
            onChange={e => {
                dispatch(setJob(e.target.value))
            }}
        />
        <button
            onClick={handleSubmit}
        >Add</button>
        {jobs.map((item, index) =>
            <li key={index}>{item}
                <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        dispatch(delJob(index))
                    }}
                >&times;</span>
            </li>
        )}
    </div>
}

export default HocUseReducer2;