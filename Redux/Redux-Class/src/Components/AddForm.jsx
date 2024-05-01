import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {addTodo} from "../Features/Todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask(' ');
    }
    

    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Add Task" onChange={(e) => setTask(e.target.value)} /> &nbsp;
            <button>Add Task</button>
        </form>
        </>
    )
}