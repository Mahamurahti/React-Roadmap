'use strict';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            posts: [],
            comments: []
        }
    }

    // Lifecycle methods:

    // When "Clock" is rendered for the first time = mounting
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )

        this.setState({
            posts: ['Who will lead us?', 'The Edge of Tomorrow', 'Can we survive in the wild', 'Mystery of our minds']
        })

        this.setState({
            comments: ['Cool post you guys!', 'Whats this about, huh?', 'Can someone tell whet is going on?']
        })
    }

    // When "Clock" is removed = unmounting
    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick() {
        // Wrong, will not re-render component
        // this.state.comment = 'Hello'; <- only usable in the constructor

        // Correct, will render component again
        // this.setState({comment: 'Hello'})

        // Wrong, may fail to update
        // this.setState({
        //     counter: this.state.counter + this.props.increment,
        // });

        // Correct, uses the previous states' state
        // this.setState((state, props) => ({
        //     counter: state.counter + props.increment
        // }));

        // Correct, same as before, but without using arrow function
        // this.setState(function(state, props) {
        //     return {
        //        counter: state.counter + props.increment
        //     };
        // });
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <FormattedDate date={this.state.date} />
                <p>Posts: <br />{this.state.posts.join(" ")}</p>
                <p>Comments: <br />{this.state.comments.join(" ")}</p>
            </div>
        );
    }
}

function FormattedDate(props){
    return <h2>It is {props.date.toLocaleDateString()} today.</h2>
}

function App(){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}

// What React does:
// 1. Calls the constructor of Clock
// 2. Initializes the state with new Date()
// 3. Calls the render function
// 4. When Clock is inserted into DOM, calls componentDidMount(), which setups the tick function
// 5. Tick function updates state with setState, when state is changed, render() is called again
// 6. If the component is removed, the timer (timerID) is stopped
ReactDOM.render(<App />, document.querySelector('#root'));

