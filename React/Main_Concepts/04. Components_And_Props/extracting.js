'use strict';

const author = {
    name: "Jonathan",
    avatarUrl: "someUrl"
}
const text = "Lorem ipsum dolor lores something"
const date = new Date().toLocaleDateString().toString();

const variableWrapper = {
    author: author,
    text: text,
    date: date
}

function formatDate(date){
    date += " " + new Date().toLocaleTimeString().toString();
    return date;
}

// We have to use the attribute name defined before ("author", "text", "date")
// Note: All props are READ-ONLY!
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

// We have to use the attribute name defined before ("user")
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

// We have to use the attribute name defined before ("user")
function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    )
}

// We send the variables as separate attributes
// We have to use the attribute name defined before ("variables")
function App(props) {
    return (
        <div>
            <Comment
                author={props.variables.author}
                text={props.variables.text}
                date={props.variables.date}
            />
        </div>
    )
}

// We pass all variables in a wrapper
ReactDOM.render(<App variables={variableWrapper} />, document.querySelector('#root'))