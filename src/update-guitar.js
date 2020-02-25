import React, { Component } from 'react'
import request from 'superagent';

export default class UpdateGuitar extends Component {
    state = {
        makes: [],
    };

    componentDidMount = async () => {
        const makes = await request.get('https://rocky-cove-46033.herokuapp.com/api/makes');
        
        this.setState({ makes: makes.body });

        const guitar = await request.get(`https://rocky-cove-46033.herokuapp.com/api/guitars/${this.props.match.params.id}`);

        console.log(guitar);
        const guitarToUpdate = guitar.body[0];
        this.setState({
            model: guitarToUpdate.model,
            is_left_handed: guitarToUpdate.is_sidekick,
            url: guitarToUpdate.url,
            make: guitarToUpdate.type_id,
            year: guitarToUpdate.year
        });
    
    }

    handleModelChange = (e) => {
        this.setState({ model: e.target.value })
    }

    handleMakeChange = (e) => {
        console.log(e.target.value)
        this.setState({ make: Number(e.target.value) })
    }

    handleYearChange = (e) => {
        this.setState({ year: Number(e.target.value) })
    }

    // handleLivesChange = (e) => {
    //     this.setState({ lives: Number(e.target.value) })
    // }

    handleIsLeftHandedChange = (e) => {
        const actualBool = e.target.value === 'false' 
            ? false 
            : true

        this.setState({ is_left_handed: actualBool })
    }

    handleImageChange = (e) => {
        this.setState({ image: e.target.value })
    }

    handleDelete = async () => {
        await request.delete(`https://rocky-cove-46033.herokuapp.com/api/guitars/${this.props.match.params.id}`);

        this.props.history.push('/');
    }
/////////////////////////
    handleSubmit = async (e) => {
        e.preventDefault();

        const newGuitar = {
            model: this.state.model,
            is_left_handed: this.state.is_left_handed,
            url: this.state.image,
            make_id: this.state.make,
            year: this.state.year,
            id: Number(this.props.match.params.id),
        }

        const dbGuitar = await request.post('https://rocky-cove-46033.herokuapp.com/api/guitars', newGuitar);


        console.log(dbGuitar)

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Make me a guitar!
                    <br/>
                    <label>
                        Model: 
                        <input value={ this.state.model } onChange={this.handleModelChange} />
                    </label>
                    <br/>
                    <label>
                        Make: 
                        <select onChange={ this.handleMakeChange }>
                            { this.state.makes.map(make => <option value={make.id}> 
                            {make.make}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Year: 
                        <input value={ this.state.year } type='number' onChange={this.handleYearChange} />
                    </label>
                    <br/>
                    <label>
                        Image: 
                        <input value={ this.state.image } onChange={this.handleImageChange} />
                    </label>
                    <br/>

                    <label>
                        Is left handed: 
                        <select value={this.state.is_left_handed} onChange={this.handleIsLeftHandedChange}>
                            <option value="true" >True</option>
                            <option value="false" >False</option>
                        </select>
                    </label>
                    <br />
                <button>Submit</button>
                </form>

                <button onClick={ this.handleDelete } 
                style={{ background: 'red', marginTop: 100}}>DELETE</button>

            </div>
        )
    }
}
