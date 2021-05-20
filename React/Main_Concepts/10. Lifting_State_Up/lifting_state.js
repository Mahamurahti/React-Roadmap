'use strict';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function BoilingVerdict(props){
    if(props.celsius >= 100)
        return <p>The water would boil.</p>
    else
        return <p>The water wouldn't boil.</p>
}

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature)
    if (Number.isNaN(input))
        return ''
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

// We lift the state up from TemperatureInput to Calculator, since its the closest sharing ancestor when we want to
// synchronize these input between each other. We want to update celsius when fahrenheit changes and vice versa.
class TemperatureInput extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ''}
    }

    handleChange(e){
        //this.setState({temperature: e.target.value})
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        // const temperature = this.state.temperature
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input
                    type="number"
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }

}

// Lifting state up to this ancestor, it shares the state and becomes the "source of truth"
class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        // This is the state we lifted from TemperatureInput
        // We only store one or the other input, since we always convert the one input to both temperatures
        this.state = {temperature: '', scale: 'c'}
    }

    // When this functions is called, it re-renders the Calculator (and the components inside it)
    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature})
    }
    // When this functions is called, it re-renders the Calculator (and the components inside it)
    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature})
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        // If the current scale is fahrenheit, convert fahrenheit to celsius, otherwise keep the temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        // If the current scale is celsius, convert celsius to fahrenheit, otherwise keep the temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

// What happens now?
// 1. React calls handleChange() in TemperatureInput when the user has typed in either field
// 2. handleChange() function calls onTemperatureChange function
// 3. This onTemperatureChange function calls either handleCelsiusChange or handleFahrenheitChange
// 4. On either of these methods the setState function is called, which also re-renders the Calculator component
// 5. Re-rendering calls Calculators render() function
// 6. The re-rendering render all the components inside Calculator again to match the changes
ReactDOM.render(<Calculator />, document.querySelector('#root'))