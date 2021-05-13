'use strict';

//               HTML                                     REACT
// <button onClick="activateLasers()">       <button onClick={activateLasers}>
//     Activate Lasers                  -->    Activate Lasers
// </button>                                 </button>

// Binding is recommended
class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggledOn: true}

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
                isToggledOn: !state.isToggledOn
            }))
    }

    // We use the binded "handleClick" so its not "handleClick()"
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggledOn ? "Yes, it is toggled" : "No, its not toggled"}
            </button>
        )
    }
}

// Without binding, may cause performance problems
class LoggingButton extends React.Component{
    handleClick() {
        console.log('This is: ', this)
    }

    render(){
        return(
            <button onClick={() => this.handleClick()}>
                Log with me
            </button>
        )
    }
}

// The below passing of arguments are equivalent
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

function App() {
    return(
        <div>
            <Toggle />
            <LoggingButton />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root')
);