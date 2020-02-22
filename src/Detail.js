import React, { Component } from 'react';
import { getGuitars } from './api.js'
import GuitarItem from './guitar-item.js';

export default class Detail extends Component {
    state = { guitar: {} }

    // asynce means we will do some fetching in here
    // componentDidMount means this will happen ONCE after the initial 'mount' of the component
    async componentDidMount() {
         // lets make a fetch using `this.props.match.params.pokeid`, which comes from the URL (thanks to react router and our detail/:pokeid? route. The colon in the route definition means it will be passed as a prop to the this component) 
        const data = await getGuitars(this.props.match.params.guitarID);

        if (data.body) {
        
        // set the pokemonChosen state to the value of the fetch
        this.setState({ guitar: data.body[0] })
            
        }
    }

    render() {
        const { guitar } = this.state;

        return (
            // render a pokeitem, passing the poemonChosen state as a prop
            <GuitarItem data={ guitar } />
      );
    }
}
