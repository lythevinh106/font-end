import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StoreContext, actions } from "../../../store"

HocUseContextWithReduce.propTypes = {

};


////// bai tập tạo ra global state

function HocUseContextWithReduce(props) {


    ////vi ben provider dua ra 1 mang nen co the nhan 1 mang o day
    const [state, dispatch] = useContext(StoreContext);
    const { todos, todoInput } = state;
    const handleAdd = () => {
        dispatch(actions.AddTodoInput(todoInput))

    }

    console.log("todo", todos);

    return (
        <div>
            <input value={todoInput}
                onChange={e => {

                    dispatch(actions.SetTodoInput(e.target.value))
                }}

            />

            <button onClick={handleAdd}>add</button>


            {todos.map((todo, index) => (

                <li key={index}>{todo}</li>
            ))}
        </div>
    );
}

export default HocUseContextWithReduce;