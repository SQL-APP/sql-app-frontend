import React, { Component } from 'react'
import request from 'superagent';

export default class CreateGuitar extends Component {
    state = {
        makes: [],
        is_left_handed: true,
        make: 1,
    };

    componentDidMount = async () => {
        // const types = await request.get('https://new-cats-db-danny.herokuapp.com/api/types');
        const makes = await request.get('https://rocky-cove-46033.herokuapp.com/api/makes');
        
        this.setState({ makes: makes.body });
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
/////////////////////////
    handleSubmit = async (e) => {
        e.preventDefault();

        const newGuitar = {
            name: this.state.name,
            isSidekick: this.state.sidekick,
            lives: this.state.lives,
            url: this.state.image,
            typeId: this.state.type,
            year: this.state.years
        }

        const dbCat = await request.post('https://new-cats-db-danny.herokuapp.com/api/cats', newGuitar);


        console.log(dbCat)

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Make me a cat!
                    <br/>
                    <label>
                        Name: 
                        <input onChange={this.handleNameChange} />
                    </label>
                    <br/>
                    <label>
                        Type: 
                        <select onChange={ this.handleTypeChange }>
                            { this.state.types.map(type => <option value={type.id}> 
                            {type.name}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Years: 
                        <input type='number' onChange={this.handleYearsChange} />
                    </label>
                    <br/>
                    <label>
                        Lives: 
                        <input type='number' onChange={this.handleLivesChange} />
                    </label>
                    <br/>
                    <label>
                        Image: 
                        <input onChange={this.handleImageChange} />
                    </label>
                    <br/>

                    <label>
                        Is a sidekick: 
                        <select onChange={this.handleSidekickChange}>
                            <option value="true" >True</option>
                            <option value="false" >False</option>
                        </select>
                    </label>
                    <br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}
