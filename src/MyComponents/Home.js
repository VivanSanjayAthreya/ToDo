import React,{ useState,useEffect } from 'react'
import { ToDos } from "./ToDos";
import { AddToDo } from "./AddToDo";

export const Home = () => {
    let initToDo;
    if (localStorage.getItem("todos") === null) {
        initToDo = [];
    }
    else {
        initToDo = JSON.parse(localStorage.getItem("todos"));
    }

    const onDelete = (todo) => {
        console.log("Deleted",todo);
        settodos(
            todos.filter((e) => {
                return e !== todo;
            })
        );
        localStorage.setItem("todos",JSON.stringify(todos));
    };

    const addToDo = (title,desc) => {
        console.log("Adding ToDo",title,desc);
        let sno;
        if (todos.length === 0) {
            sno = 1;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myToDo = {
            sno: sno,
            title: title,
            desc: desc,
        };
        settodos([...todos,myToDo]);
        console.log(myToDo);
    };

    const [todos,settodos] = useState(initToDo);
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])

    return (
        <>
            <AddToDo addToDo={addToDo} />
            <ToDos todos={todos} onDelete={onDelete} />
        </>
    )
}

