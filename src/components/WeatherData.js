import React from "react";

function WeatherData(props) {
    let cityId = props.store.selected;
    return (
        <div>
            Current weather data in {props.store.cities[cityId].name}:
            <ul>
                <li>temperature = {props.store.cities[cityId].temp} degrees Celsius</li>
                <li>pressure = {props.store.cities[cityId].pres} mBar</li>
                <li>humidity = {props.store.cities[cityId].him} %</li>
            </ul>
        </div>
    )
}

export default WeatherData;