import { createContext,useContext } from "react";

export const TodoContect=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed: false,
        }
    ],

    addTodo:(todo)=>{},
    UpdateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    TogleComplete:(id)=>{}
})


export const useTodo=()=>{
    return useContext(TodoContect)
}

export const TodoProvider=TodoContect.Provider