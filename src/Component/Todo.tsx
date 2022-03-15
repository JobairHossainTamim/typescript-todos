import React, { useState, ChangeEvent } from 'react';
import './Todo.css';
import {ITask} from './Interfaces';
import TodoTask from './Task/TodoTask';

const Todo = () => {
    const [task, setTask]=useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList]=useState<ITask[]>([]);

   
    const handleChange =(event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === 'task'){
            setTask(event.target.value);
        }
        else{ 
            setDeadline(Number(event.target.value));
        }
       
    };

    const completeTask =(taskNameToDelete: string):void =>{
setTodoList(todoList.filter((task) => {
    return task.taskName !== taskNameToDelete;
}));
    };

    const addTask =():void=>{
        const newTask={ taskName:task , deadline:deadline};
        setTodoList([...todoList ,newTask]);
        setTask('');
        setDeadline(0);
    }

    return (
        <div >
            <div className="header-main">
                <div className="input-container">
                <input 
                type="text"
                 placeholder="Task ....." 
                 value={task}
                 name="task" 
                 onChange={handleChange} />
                 {/* input  */}
                <input
                value={deadline}
                type="number" 
                name="deadline"
                placeholder="Deadline (in line)...."  
                onChange={handleChange} />   
                </div>       
                <button onClick={addTask}>Add task </button>
               
            </div>
            <div className="todoList">
               {
                   todoList.map((task:ITask, key:number) =>{return<TodoTask key={key} task={task} completeTask={completeTask}></TodoTask>})
               }
            </div>
        </div>
    );
};

export default Todo;