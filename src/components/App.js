import React from 'react';
import { connect } from 'react-redux'
import SelectCityForm from './SelectCityForm'
import WeatherData from './WeatherData'

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
    this.props.GetWeather(this.props.store.selected);
    this.forceUpdate();
  }
  render() {
    return (
        <div id="main">
          <div id="form">
            <form>
              <SelectCityForm store={this.props.store} />
              <br/>
              <br/>
              <button id="button" onClick={this.handleSubmit}> Find weather! </button>
            </form>
          </div>
          <br/>
          <WeatherData store={this.props.store}/>
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

