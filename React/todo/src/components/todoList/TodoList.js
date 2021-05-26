import React, { useState, useRef } from 'react';

import TodoInput from "../todoInput/TodoInput";
import TodoItem from "../todoItem/TodoItem";

/**
 * TodoList is the list that holds everything the app offers inside.
 *
 * @return {JSX.Element} with a title, input and todos
 */
function TodoList(){
    /**
     * todos {Array} stores all the todos in the application
     * setTodos is a function to set the value of todos
     */
    const [todos, setTodos] = useState([])

    /**
     * An array of different greetings.
     *
     * @type {string[]}
     */
    const greetings = [
        "What's the plan for today?",
        "What are we doing today?",
        "Do we have a plan for today?",
        "What is our plan?",
        "Got any plans?",
        "Any big plans?",
        "What project should we do today?",
        "Anything planned?",
        "We have work to do.",
        "What's our schedule for today?",
        "What do we need to do?",
        "Anything to do?",
        "Our plans.",
        "Today's agenda."
    ]
    /**
     * A greeting that is stores in a ref, so that it doesn't change everytime the component re-renders.
     * The greeting is randomly selected from the array of greetings.
     *
     * @see greetings
     * @type {React.MutableRefObject<string>}
     */
    const greeting = useRef(greetings[Math.floor(Math.random() * greetings.length)]);

    /**
     * This function adds todos by creating an array with the first element being the parameter element
     * and after it spreading the rest of the todos after it. After setting todos, the component re-renders.
     *
     * @param newTodo {Object} is the object that need to be added to the todos list. Created in TodoInput
     */
    function addTodo(newTodo){
        const updated = [newTodo, ...todos]
        setTodos(updated)
    }

    /**
     * This function sets the todos to a completed state by toggling between the boolean isComplete.
     * After setting todos, the component re-renders.
     *
     * @param id {Number} is the id of the element we want to set to completed status
     */
    function completeTodo(id){
        let updated = todos.map(todo => {
            if(todo.id === id)
                todo.isComplete = !todo.isComplete;
            return todo;
        })
        setTodos(updated)
    }

    /**
     * This function deletes an element from the todos list by filtering away the correct element.
     * First this function spreads all the element into a new array and filters away the element with the correct id.
     * After setting todos, the component re-renders.
     *
     * @param id {Number} is the id of the element we want to filter away
     */
    function deleteTodo(id){
        const updated = [...todos].filter(todo => todo.id !== id)
        setTodos(updated)
    }

    /**
     * This function re-renders the component and changes the element with the correct id into a input field, where
     * the user can edit the element.
     *
     * @param id {Number} is the id of the element that will be changed into a input field
     * @param newValue {Object} is the new value of the object that will be saved
     */
    function editTodo(id, newValue){
        setTodos(prevState => prevState.map(item => item.id === id ? newValue : item))
    }

    const todoListCss = 'text-4xl my-4 text-center'

    /**
     * We pass down all the functions created here to the children and also the list of todos
     */
    return (
        <div>
            <h1 className={todoListCss}>
                {greeting.current}
            </h1>
            <TodoInput onSubmit={addTodo} />
            <TodoItem
                todos={todos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </div>
    )
}

export default TodoList;