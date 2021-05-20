'use strict';

//              HTML FORMS
// <form>
//     <label>
//         Name:
//         <input type="text" name="name" />
//     </label>
//     <input type="submit" value="Submit" />
// </form>

// Controlled component
class NameForm extends React.Component{
    constructor(props) {
        super(props);
        // The "source of truth"
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        alert('A name was submitted: ' + this.state.value)
    }

    render() {
        // Input fields value is the value of the source of truth meaning "this.state.value"
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value='Submit'/>
            </form>
        );
    }
}

// Uncontrolled Component
class NameFormTwo extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
    }

    handleSubmit(event){
        event.preventDefault()
        alert('A name was submitted: ' + this.input.current.value)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" defaultValue="Bob" ref={this.input}/>
                </label>
                <input type="submit" value='Submit'/>
            </form>
        )
    }

}

// Controlled component
class EssayForm extends React.Component{
    constructor(props) {
        super(props);
        // Set some default text in the textarea
        this.state = {
            value: 'Please write an essay here about what you love about coding'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        alert('An essay was submitted: ' + this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}

// Controlled component
class FlavourForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        const values = this.state.value
        alert('Your favourite flavour is ' + values)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favourite flavour:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="strawberry">Strawberry</option>
                        <option value="blackberry">Blackberry</option>
                        <option value="banana">Banana</option>
                        <option value="apple">Apple</option>
                        <option value="mango">Mango</option>
                        <option value="citrus">Citrus</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}

// Controlled component
class Reservation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        type="checkbox"
                        name="isGoing"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        type="number"
                        name="numberOfGuests"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }

}

function App(){
    return (
        <div>
            <NameForm />
            <NameFormTwo />
            <EssayForm />
            <FlavourForm />
            <Reservation />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))