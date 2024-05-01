import {useSelector} from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo,marksAsDone } from "../Features/Todo/todoSlice";

export default function Todo() {
   const todos= useSelector((state)=>state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    }
    const marksAsDoneHandler = (id) => {
        console.log("done", id);
        dispatch(marksAsDone(id));

    }

    return (
        <>
        <AddForm/>
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo)=>(
                <li key= {todo.id}> &nbsp;
                <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.task}</span>
                <button onClick={()=> deleteHandler(todo.id)} >Delete</button> &nbsp;
                <button onClick={()=> marksAsDoneHandler(todo.id)} > Mark As Done</button>
                </li>
            )
        )}

        </ul>
        </>
    )
}