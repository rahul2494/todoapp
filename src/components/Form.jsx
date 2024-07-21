import { useState } from "react";
import styles from "./form.module.css";


export default function Form({ todos, setTodos }){
    // let [todo, setTodo] = useState("");
    let [todo, setTodo] = useState({name:'',done:false});

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:'',done:false});
    }

    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input
                className={styles.modernInput} 
                onChange={(e)=>setTodo({name:e.target.value, done:false})}
                type="text"
                value={todo.name}
                placeholder="Enter todo item..."
                />
                <button type="submit" className={styles.modernButton}>Add</button>
            </div>
        </form>
    )
}