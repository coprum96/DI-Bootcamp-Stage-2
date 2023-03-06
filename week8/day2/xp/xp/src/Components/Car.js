import React from 'react'

// Part2
class Car extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'BMW',
            model: 'X5',
            color: 'black'
        }
    } 

    render(){
        return( 
        <div>
            <h1>This is {this.state.color} {this.state.name} {this.state.model}</h1>
        </div>
        )
    }
}

export default Car;