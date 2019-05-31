import GetQueryArgs from "./../components/GetQueryArgs";

export const changeCity = (cityId) => {
    return {
        type: "CHANGE_CITY",
        payload: cityId
    }
};

export const getCityWeather = (cityId) => {
    return dispatch => {
        dispatch(changeCity(cityId));
        let name = GetQueryArgs(cityId);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b41984b8b5135f1695c5faac30990138`)
            .then((resp) => resp.json())
            .then((data) => dispatch({
                type: "GET_WEATHER",
                payload: [cityId, data.main],
            }))
    }
}

