'use strict';

const JSON_API = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

// Hieararchy:
//
// 1. FilterableProductTable
//    2. SearchBar
//    2. ProductTable
//       3. ProductCategoryRow
//       3. ProductRow

function ProductRow(props){
    const name = props.name
    const price = props.price
    const stocked = props.stocked
    return (
        <tr>
            <td className={stocked ? '' : 'red'}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

function ProductCategoryRow(props){
    const name = props.name
    return (
        <tr>
            <th colSpan='2'>{name}</th>
        </tr>
    )
}

class ProductTable extends React.Component{
    render() {
        const row = []
        let category = ''

        const filterText = this.props.filterText
        const showOnlyStocked = this.props.showOnlyStocked

        this.props.data.forEach(data => {
            if(category !== data.category){
                row.push(
                    <ProductCategoryRow name={data.category} key={data.category}/>
                )
            }
            if(showOnlyStocked){
                if(data.name.includes(filterText) && data.stocked){
                    row.push(
                        <ProductRow name={data.name} price={data.price} stocked={data.stocked} key={data.name}/>
                    )
                }
            }else if(data.name.includes(filterText)){
                row.push(
                    <ProductRow name={data.name} price={data.price} stocked={data.stocked} key={data.name}/>
                )
            }
            category = data.category
        })

        return (
            <table className='ProductTable'>
                <thead>
                <tr>
                    <th>Name:</th>
                    <th>Price:</th>
                </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        )
    }
}

// Search text and checkbox need own state, the owner of the state should be the closest sharing ancestor since
// both ProductTable and SearchBar need to change.
class SearchBar extends React.Component{
    render() {
        const filterText = this.props.filterText
        const showOnlyStocked = this.props.showOnlyStocked
        const handleSearch = this.props.handleSearch
        const handleCheck = this.props.handleCheck

        return (
            <form className='SearchBar'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={handleSearch}
                />
                <br/>
                <label>
                    <input
                        type="checkbox"
                        checked={showOnlyStocked}
                        onChange={handleCheck}
                    />
                    Only show stocked products
                </label>
            </form>
        )
    }
}

// Here we declare the state, since this is the closest sharing ancestor for both the components that need the state
class FilterableProductTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            showOnlyStocked: false
        }

        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleCheckChange = this.handleCheckChange.bind(this)
    }

    handleSearchChange(e){
        this.setState({filterText: e.target.value})
    }

    handleCheckChange(e){
        this.setState({showOnlyStocked: e.target.checked})
    }

    // I used the same method of passing down functions for the onChange listeners from here that was used
    // in the "Lifting State Up" example. Seems to do the work just fine.
    render(){
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    showOnlyStocked={this.state.showOnlyStocked}
                    handleSearch={this.handleSearchChange}
                    handleCheck={this.handleCheckChange}
                />
                <ProductTable
                    data={this.props.data}
                    filterText={this.state.filterText}
                    showOnlyStocked={this.state.showOnlyStocked}
                />
            </div>
        )
    }
}

ReactDOM.render(<FilterableProductTable data={JSON_API}/>, document.querySelector('#root'))