'use strict';

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName: 'Eric',
    lastName: 'Keränen'
};

// Not string or HTML, but JSX.
// JSX tags may contain only one HTML tag, if you want children, put them inside the tag, like below
const element = (
    <div>
        <h1>
            Hello, {formatName(user)}
        </h1>
        <h1 className="greeting">
            {getGreeting(user)}
        </h1>
    </div>
);

function getGreeting(user) {
    // JSX can be an expression
    if (user) {
        // Embed JavaScript expression into the attribute
        // Note: don't use quotes in this case and use camelCase
        return <h1 id={user.firstName}>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
    element,
    document.getElementById('root')
);