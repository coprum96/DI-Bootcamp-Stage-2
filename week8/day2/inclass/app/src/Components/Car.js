import React from 'react'

class Car extends React.Component{
    constructor(){
        super()
        this.state = {
            color: 'red',
            brand: 'Ferrari',
            model: 'Scandale',
            year: 2022
        }
    } 

    render(){
        return( 
        <div>
            <h1>My {this.state.brand}</h1>
            <p>it is {this.state.model}</p>
            <h2> in year {this.state.year}</h2>
            <p> color {this.state.color}</p>
        </div>
        )
    }
}

export default Car;