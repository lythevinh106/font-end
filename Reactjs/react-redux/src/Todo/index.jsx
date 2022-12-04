import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, addTodo, removeJob, setJob } from './TodoSlice';


TodoList.propTypes = {
    TodoList: PropTypes.array,
    onTodoClick: PropTypes.func

};

TodoList.defaultProps = {
    TodoList: [],
    onTodoClick: null
}




function TodoList() {


    const dispatch = useDispatch();
    ////useSelector la cai hook lay dc 1 state tu trong kho
    const todo = useSelector(state => state.todo);
    const { job, jobs } = todo;
    let inputref = useRef();

    // console.log(todo);

    const handleBtnClick = () => {

        dispatch(addJob(job));
        inputref.current.focus();
        dispatch(setJob({
            title: "",
            status: ""
        }));







    }






    // const handleTodoList = (todo, index) => {
    //     if (!onTodoClick) return;

    //     onTodoClick(todo, index)
    // }



    const handleInputChange = (e) => {
        dispatch(setJob({ title: e.target.value, status: "new" }))
    }
    const handleLiClick = index => {
        dispatch(removeJob(index))
    }

    return (
        <>
            <input ref={inputref} value={job.title} type="text" onChange={(e) => handleInputChange(e)} />

            <button onClick={handleBtnClick}>them du lieu</button>



            <ul>
                {jobs.map((job, index) => (


                    <li

                        onClick={() => {

                            handleLiClick(index)
                        }}
                        key={index}

                    >
                        {job.title}


                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;