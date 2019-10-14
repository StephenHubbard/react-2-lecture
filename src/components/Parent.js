import React, {Component} from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Aaron', 
            age: 27,
            email: 'mycrazyemail@gmail.com', 
            phone: '555-555-3984', 
            address: '493 Made up St., Westsport NY', 
            website: 'refactoredumbrella.com'
        }
    }

    render() {
        return (
            <div className='parent'>
                <h1>User Info</h1>
                <Child 
                name={this.state.name} 
                age={this.state.age} 
                email={this.state.email}
                phone={this.state.phone}
                address={this.state.address}
                website={this.state.website}
                />
            </div>
        )
    }
}