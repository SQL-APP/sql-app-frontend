import React, { Component } from 'react'
import GuitarItem from './guitar-item.js';
import request from 'superagent';
// import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';

export default class GuitarList extends Component {
    state = {
        // searchQuery: this.props.match.params.name,
        guitars: []
    }
    async componentDidMount() {
        const data = await request.get(`https://rocky-cove-46033.herokuapp.com/api/guitars`)
        console.log(data);
            this.setState({ guitars: data.body });
        }
        // console.log(data);
// handleChange = (e) => this.setState({ searchQuery: e.target.value })
    render() {
        return (
            <div>
                    <ul>
                    {
                        this.state.guitars.length && this.state.guitars.map(guitar =>
                         <Link to={`guitars/${guitar.model}`} key={guitar.id}>
                            <GuitarItem guitars={guitar} />
                        </Link>)
                    }
                </ul>
            </div>
        )
    }
}
// handleSearch = async (e) => {
//     e.preventDefault();
//     const data = await request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes${this.state.searchQuery}`)
//     this.setState({
//         shoes: data.body.results,
//     })
//     this.props.history.push(this.state.searchQuery)
// }
// <header>
//     <SearchBar
//         searchQuery={this.state.searchQuery}
//         handleSearch={this.handleSearch}
//         handleChange={this.handleChange}
//     />
// </header>