import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GuitarItem extends Component {
    render() {
        const { guitars } = this.props;
        console.log(guitars.is_left_handed);

        if (guitars) return (
            <div>
                <li id="guitar-list">
                    <h1>{guitars.model}</h1>
                    <Link to={`/update/${guitars.id}`}>update</Link>
                    <h3>make: {guitars.make}</h3>
                    <img src={guitars.url} alt="" id="guitar-images"/>
                    <h3>Year: {guitars.year}</h3>
                    <h3>Is Left Handed: {String(guitars.is_left_handed)}</h3>
                </li>
            </div>
        )
        return null;
    }
    
}