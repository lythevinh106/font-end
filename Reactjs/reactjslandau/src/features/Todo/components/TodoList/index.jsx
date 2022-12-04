import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";
import classnames from "classnames"
TodoList.propTypes = {
    TodoList:PropTypes.array,
    onTodoClick:PropTypes.func

};

TodoList.defaultProps={
    TodoList:[],
    onTodoClick:null
}




function TodoList({todoList,onTodoClick}) {


    const handleTodoList=(todo,index)=>{
        if(!onTodoClick) return;

       onTodoClick(todo,index)
    }
  
    return (
        <ul>
            {todoList.map((todo,index)=>(


                <li 
                onClick={()=>handleTodoList(todo,index)}
                className={classnames({
                    "todo-item":true
                    ,completed:todo.status==="completed"})}
                        key={todo.id} 
                                     
                        >
                        {todo.title}

                       
                </li>
            ))}
        </ul>
    );
}

export default TodoList;