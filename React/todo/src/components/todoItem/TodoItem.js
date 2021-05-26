import React, { useState } from 'react';

import TodoInput from "../todoInput/TodoInput";
import { RiCloseCircleFill, RiEditCircleFill, RiCheckboxCircleFill } from "react-icons/all";

/**
 * TodoItem is the component that TodoList renders and that TodoInput adds to TodoList.
 *
 * @param todos {Object[]} are all of the todos from TodoList
 * @param completeTodo {function} is the function to set the element as complete
 * @param deleteTodo {function} is the function to delete a certain element
 * @param editTodo {function} is the function that transform an element into a input field for editing
 * @return {*} with the content of an element and buttons to interact with the element
 */
function TodoItem({ todos, completeTodo, deleteTodo, editTodo }){
    /**
     * edit {Object} is a temporary object, that will hold information of the element that is being edited
     * setEdit is a function that sets the value of edit
     */
    const [edit, setEdit] = useState({
        id: null,
        content: ''
    })

    /**
     * This is a function that calls TodoLists editTodo function, that re-renders the list and changes the correct
     * element into an input field, where the user can edit the element.
     *
     * @param value {Object} is the new value of the element that was edited
     */
    function submitEdit(value){
        editTodo(edit.id, value)
        setEdit({
            id: null,
            content: ''
        })
    }

    const todoContainerCss = 'flex items-center justify-center'
    const todoItemCss = 'w-96 p-2 my-2 flex items-center border border-green-200 rounded-md focus:border-green-500 ' +
                        'outline-none select-none bg-white'
    const todoItemCompleteCss = todoItemCss + ' line-through opacity-60'
    const todoTextCss = 'overflow-hidden'
    const iconsCss = 'flex ml-auto'
    const defaultIconCss = 'text-2xl transition'
    const checkIconCss = defaultIconCss + ' hover:text-green-500'
    const closeIconCss = defaultIconCss + ' hover:text-red-500'
    const editIconCss = defaultIconCss + ' hover:text-blue-500'

    /**
     * In this return statement the main thing is that we check if the elements id is the same as the edit elements id.
     * The edit button sets the edit value, which causes the component to re-render. During the render the element
     * with the same id as the clicked elements id renders as an TodoInput instead, which gives the user an opportunity
     * to edit the clicked element. This time the TodoInput submits the element with the function editTodo that
     * renders the previous state of the list normally, except for the element with the correct id, which will be the
     * modified element instead.
     */
    return todos.map((todo, index) => (
        <div className={todoContainerCss} key={index}>
            {todo.id === edit.id ?
                (<>
                    <TodoInput edit={edit} onSubmit={submitEdit}/>
                </>)
                :
                (<>
                    <div className={todo.isComplete ? todoItemCompleteCss : todoItemCss}>
                        <div key={todo.id} className={todoTextCss}>
                            {todo.content}
                        </div>
                        <div className={iconsCss}>
                            <RiCheckboxCircleFill
                                onClick={() => completeTodo(todo.id)} className={checkIconCss} />
                            <RiCloseCircleFill
                                onClick={() => deleteTodo(todo.id)} className={closeIconCss} />
                            <RiEditCircleFill
                                onClick={() => setEdit({id: todo.id, content: todo.content})} className={editIconCss} />
                        </div>
                    </div>
                </>)
            }
        </div>
    ))
}

export default TodoItem;