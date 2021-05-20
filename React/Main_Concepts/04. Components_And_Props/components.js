'use strict';

// Function Component
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

// The same thing below
// Note: Always start components names with a capital letter
// Components starting with lower letter = DOM tags
// Components starting with capital letter = Component

// Class Component
class WelcomeAgain extends React.Component {
    render() {
        return <h1>Hello again, {this.props.name}</h1>
    }
}

// Components can be used in elements, just like HTML tags
const element = <Welcome name="Eric" />;
const elementAgain = <WelcomeAgain name="Eric" />;

function App() {
    return (
        <div>
            {element}
            {elementAgain}
            <Welcome name="Sarah" />
            <WelcomeAgain name="Saraha" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))