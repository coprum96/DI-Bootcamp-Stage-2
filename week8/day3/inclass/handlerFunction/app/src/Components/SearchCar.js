import React from "react";

const SearchCar = (props) => {
    console.log(props)
    let { listCars, handleChange } = props
    let listWithoutDup = [...new Set(listCars.map(item => (item.brand)))];
    return (
        <select id="mySelect" onChange={handleChange}>
            <option>...</option>
            {
                listWithoutDup.map(item => (
                    <option value={item}>{item}</option>
                ))
            }
        </select>
    )
}

export default SearchCar;