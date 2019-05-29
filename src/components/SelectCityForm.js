import React from "react";
import GetCityNumber from './GetCityNumber'
import {connect} from "react-redux";


class SelectCityForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        this.props.changeCity(GetCityNumber(event.target.value));
    }
    render() {
        return (
            <select id="select" onChange={this.handleChange}>
                <option> {this.props.st.cities[0].name} </option>
                <option> {this.props.st.cities[1].name} </option>
                <option> {this.props.st.cities[2].name} </option>
            </select>
        )
    }
}


export default connect(
    state =>({
        st: state,
    }),
    dispatch => ({
        changeCity: (cityId)=> {
            dispatch({type: 'CHANGE_CITY', payload: cityId})
        }
    })
)(SelectCityForm);

//export default SelectCityForm;