import React, { useState, useEffect, useRef } from 'react';

/**
 * TodoInput is the input field where the user can add more todos to the TodoList
 *
 * @param props holds all the necessary variables and function passed down form the parents
 * @return {JSX.Element} with an input field and a button
 */
function TodoInput(props){
    /**
     * input {String} stores the value of the input field
     * setInput is a function that sets the value of input
     */
    const [input, setInput] = useState(props.edit ? props.edit.content : '');

    /**
     * focusRef is a ref, that will be used to focus on a target.
     * useRef always return an object with one property with the name of current, so when we want to use
     * this ref in code, we access it by focusRef.current
     *
     * @type {React.MutableRefObject<null>}
     */
    const focusRef = useRef(null)

    /**
     * useEffect to focus on the input field when the component re-renders.
     * The ref is set to the input field in this functions return statement.
     */
    useEffect(() => {
        focusRef.current.focus()
    })

    /**
     * This is a function that updates the input variable by "listening" the input field with onChange.
     *
     * @param e is the DOM element for the input field
     */
    function handleChange(e) {
        setInput(e.target.value)
    }

    /**
     * This is a function checks if the input field has only spaces and if it doesn't, then it uses the function onSubmit
     * passed down from TodoList to save the value of the input field and set the id of the element to the number value
     * of the current date. This function is called, when the user clicks the button that submits the form.
     * Also reset the input fields value to nothing, so the user can start to type something new.
     *
     * This function also causes a small chain reaction, in which the TodoLists function addTodo() is called, which
     * causes also that component to re-render and show the newly added element in the browser as a TodoItem.
     *
     * @param e is the DOM element for the form, used to prevent default submit behaviour
     */
    function handleSubmit(e) {
        e.preventDefault()

        if(input.replace(/\s/g, '').length){
            props.onSubmit({
                id: Number(new Date()),
                content: input
            })

            setInput('')
        }
    }

    const formCss = 'flex justify-center'
    const inputCss = 'w-80 p-2 my-2 border border-green-200 rounded-md focus:border-green-500 outline-none'
    const addButtonCss = 'w-20 p-2 my-2 bg-green-400 hover:bg-green-500 rounded-md transition'
    const updateButtonCss = 'w-20 p-2 my-2 bg-yellow-200 hover:bg-yellow-300 rounded-md transition'

    /**
     * The onSubmit function calls the addTodo or editTodo function from TodoList. In this return statement the state of
     * props.edit is also checked, since if we want to edit a TodoItem, we use this same component, but with a little
     * different styling.
     *
     * @see TodoItem
     */
    return (
        <form onSubmit={handleSubmit} className={formCss}>
            {props.edit ?
                (<>
                    <input
                        type="text"
                        placeholder="Update your item"
                        value={input}
                        onChange={handleChange}
                        className={inputCss}
                        ref={focusRef}
                    />
                    <button className={updateButtonCss}>Update</button>
                </>)
                :
                (<>
                    <input
                        type="text"
                        placeholder="Add todos by writing here"
                        value={input}
                        onChange={handleChange}
                        className={inputCss}
                        ref={focusRef}
                    />
                    <button className={addButtonCss}>Add</button>
                </>)
            }
        </form>
    )
}

export default TodoInput;