'use strict';

// Vanilla JS:
// const numbers = [2, 4, 6, 8]
// const doubled = numbers.map(number => number * 2)
// console.log(doubled)

// Will produce a warning without "key" prop
function ListNumbers(props){
    const numbers = props.numbers
    // Remember keys, the same rule applies in Vue! Best to use ID's instead of index.
    // Keys must be unique among siblings, but don't have to be globally unique
    // So two arrays can use the same keys since the arrays are different
    // Keys are not passed down to the component, pass it down explicitly if you need ti
    const listItems = numbers.map(number => <li key={number.toString()}>{number * 2}</li>)
    return (
        <div>
            <h1>ListNumbers</h1>
            <ul>{listItems}</ul>
        </div>
    )
}

// Correct, there is no need to specify key here     // Wrong, there is no need to specify key here
function ListItem(props){                            // function ListItem(props) {
    return <li>{props.value}</li>                    //    const value = props.value;
}                                                    //    return <li key={value.toString()}>{value}</li>
                                                     // }

// Correct, key should be specified inside the array // Wrong, key should be specified inside the array
function NumberList(props){                          // function NumberList(props) {
    const numbers = props.numbers                    //    const numbers = props.numbers;
    const listItems = numbers.map(number =>          //    const listItems = numbers.map((number) =>
        <ListItem                                    //       <ListItem value={number} />
            key={number.toString()}                  //    )
            value={number * 3}                       //    return <ul>{listItems}</ul>
        />)                                          // }
    return (
        <div>
            <h1>NumberList</h1>
            <ul>{listItems}</ul>
        </div>
    )
}

function EmbeddedJsxNumberList(props){
    const numbers = props.numbers
    return (
        <div>
            <h1>Embedded NumberList</h1>
            <ul>
                {numbers.map(number =>
                    <ListItem key={number.toString()} value={number * 4}/>)}
            </ul>
        </div>
    )
}

function App(){
    const numbers = [2, 4, 6, 8]
    return (
        <div>
            <ListNumbers numbers={numbers} />
            <NumberList numbers={numbers} />
            <EmbeddedJsxNumberList numbers={numbers} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))