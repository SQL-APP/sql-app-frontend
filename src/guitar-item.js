import React, { Component } from 'react'
export default class GuitarItem extends Component {
    render() {
        return (
            <div>
                <li id="guitar-list">
                    <h1>{this.props.data.model}</h1>
                    <h3>make: {this.props.data.make}</h3>
                    <img src={this.props.data.url} alt="" id="guitar-images"/>
                    <h3>Year: {this.props.data.year}</h3>
                    <h3>Is Left Handed: {this.props.data.is_left_handed}</h3>
                </li>
            </div>
        )
    }
}