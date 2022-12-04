import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

  const initTodoList=[
    {

        id:1,
        title:"eat",
        status:"new"
    },

    {

        id:2,
        title:"sleep",
        status:"completed"
    },

    {

        id:3,
        title:"code",
        status:"new"
    },
  ]
;
 const [todoList,setTodoList]=useState(initTodoList);

 const [FilterStatus,setFilterStatus]=useState("all");

  const handleTodoList=(todo,index)=>{

    ////toggle state
    //clone ra 1 mang moi
    const newTodoList=[...todoList];

     newTodoList[index]={
        ...newTodoList[index],
        status:newTodoList[index].status==="new"?"completed":"new"
    };

    setTodoList(newTodoList);
  

  }


  /////filter theo nut
const handleShowALlClick=()=>{

 setFilterStatus("all");
}
const handleShowNewClick=()=>{

    setFilterStatus("new");
}
const handleShowCompletedClick=()=>{
    setFilterStatus("completed");
}


const renderTodoList=todoList.filter(todo=>FilterStatus==="all"|| FilterStatus===todo.status)


    return (
        <div>
            <h3>TODOLIST</h3>
            <TodoList todoList={renderTodoList}  onTodoClick={handleTodoList}/>


            


             <button onClick={handleShowALlClick}>Show ALl</button>
             <button onClick={handleShowNewClick}>Show ALl</button>
             <button onClick={handleShowCompletedClick}>Show ALl</button>
        </div>
    );
}

export default TodoFeature;