import React from "react";
import GetCityNumber from './GetCityNumber'

class SelectCityForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._addHandlers();
    }
    _addHandlers() {
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        this.props.store.selected = GetCityNumber(event.target.value);
    }
    render() {
        return (
            <select id="select" onChange={this.handleChange}>
                <option> {this.props.store.cities[0].name} </option>
                <option> {this.props.store.cities[1].name} </option>
                <option> {this.props.store.cities[2].name} </option>
            </select>
        )
    }
}

export default SelectCityForm;