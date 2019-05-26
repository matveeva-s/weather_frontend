import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._addHandlers();
    this.state = {
        store: props.store,
        cities: props.store.cities,
    }
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
    this.render();
    return false;
  }
  render() {
      console.log(
          this.props.store.cities[0].temp,
          this.props.store.cities[1].temp,
          this.props.store.cities[2].temp
      );
    return (
        <div>
          <form id="form">
            <select id="select">
              <option> {this.props.store.cities[0].name} </option>
              <option> {this.props.store.cities[1].name} </option>
              <option> {this.props.store.cities[2].name} </option>
            </select>
            <button onClick={this.handleSubmit}> Find weather! </button>
          </form>
          <div>
              temp1 = {this.props.store.cities[0].temp}
              temp2 = {this.props.store.cities[1].temp}
              temp3 = {this.props.store.cities[2].temp}
          </div>
        </div>
    )
  }
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

