import React, { useState, useEffect } from 'react';

// 1. Only call hooks at the top level, meaning not in loops, conditions or nested functions.
// 2. Only call hooks from React functions, meaning do not call hooks for example from regular JS code

function Form() {
    // 1. Use the name state variable
    const [name, setName] = useState('Mary');

    // 2. Use an effect for persisting the form
    useEffect(function persistForm() {
        localStorage.setItem('formData', name);
    });

    // 3. Use the surname state variable
    const [surname, setSurname] = useState('Poppins');

    // 4. Use an effect for updating the title
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname;
    });

    // First render
    // useState('Mary')           // 1. Initialize the name state variable with 'Mary'
    // useEffect(persistForm)     // 2. Add an effect for persisting the form
    // useState('Poppins')        // 3. Initialize the surname state variable with 'Poppins'
    // useEffect(updateTitle)     // 4. Add an effect for updating the title

    // Second render
    // useState('Mary')           // 1. Read the name state variable (argument is ignored)
    // useEffect(persistForm)     // 2. Replace the effect for persisting the form
    // useState('Poppins')        // 3. Read the surname state variable (argument is ignored)
    // useEffect(updateTitle)     // 4. Replace the effect for updating the title
}

function BreakForm() {
    // 1. Use the name state variable
    const [name, setName] = useState('Mary');

    // Use an effect for persisting the form                            // useState('Mary')
    // We're breaking the first rule by using a Hook in a condition     // 1. Read the name state variable (argument is ignored)
    if (name !== '') {                                                  // useEffect(persistForm) This Hook was skipped!
        useEffect(function persistForm() {                              // useState('Poppins')
            localStorage.setItem('formData', name);                     // 2 (but was 3). Fail to read the surname state variable
        });                                                             // useEffect(updateTitle)
    }                                                                   // 3 (but was 4). Fail to replace the effect

    // 2. Instead use this, if you want to use a condition:
    useEffect(function persistForm() {
        // We're not breaking the first rule anymore
        if (name !== '') {
            localStorage.setItem('formData', name);
        }
    });

    // 3. Use the surname state variable
    const [surname, setSurname] = useState('Poppins');

    // 4. Use an effect for updating the title
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname;
    });


}
