import React from 'react';
import { connect } from 'react-redux'
import SelectCityForm from './components/SelectCityForm'
import WeatherData from './components/WeatherData'
import {getCityWeather} from "./store/actions";

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getWeather(this.props.store.selected);
        this.forceUpdate();
    }
    render() {
        return (
            <div id="main">
                <div id="form">
                    <form>
                        <SelectCityForm st={this.props.store}/>
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
        getWeather: (id) => {
            dispatch(getCityWeather(id))
        }
    })

)(App);