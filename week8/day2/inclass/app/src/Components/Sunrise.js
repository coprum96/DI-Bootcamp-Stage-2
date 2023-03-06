import React from "react";

class Sunrise extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            country: 'Israel',
            city: 'Tel Aviv',
            hourSunrise: null // initialize the state variable
        }
    }

    componentDidMount(){
        fetch('https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818')
        .then((res) => res.json())
        .then((res) => {
            this.setState({hourSunrise:res.results.sunrise})
        })
        .catch((err) => {
            console.log(`we have one ${err}`)
        });
    }

    render() {
        let {country, city, hourSunrise} = this.state;
        return(
            <>
                <h1>In {country}</h1>
                <p>The hour of the sunrise in {city} is {hourSunrise}</p>
            </>
        )
    }
}

export default Sunrise;
