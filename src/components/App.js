import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._addHandlers();
  }
  _addHandlers() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let city = document.getElementById("select").value;
    let cityId = 0;
    switch (city) {
        case "Moscow":
            cityId = 0;
            break;
        case "London":
            cityId = 1;
            break;
        case "Paris":
            cityId = 2;
            break;
        default:
            cityId = 0;
    }
    this.props.GetWeather(cityId);
    this.forceUpdate();
  }
  render() {
    return (
        <div id="main">
          <div id="form">
            <form>
              <SelectForm store={this.props.store}/>
              <br/>
              <br/>
              <button id="button" onClick={this.handleSubmit}> Find weather! </button>
            </form>
          </div>
          <br/>
          <Result store={this.props.store}/>
        </div>
    )
  }
}

function SelectForm(props) {
    return (
        <select id="select">
            <option> {props.store.cities[0].name} </option>
            <option> {props.store.cities[1].name} </option>
            <option> {props.store.cities[2].name} </option>
        </select>
    )
}

function Result(props) {
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

export default connect(
    state =>({
      store: state,
    }),
    dispatch => ({
      GetWeather: (cityName)=> {
        dispatch({type: 'GET_WEATHER', payload: cityName})
      }
    })
)(App);

