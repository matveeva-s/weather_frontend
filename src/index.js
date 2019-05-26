import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App'

const initialState = {
    "cities": [
        {
            "name" : "Moscow",
            "temp": 0,
        },
        {
            "name": "London",
            "temp": 0,
        },
        {
            "name" : "Paris",
            "temp": 0,
        },
    ]
};

function Reducer(state = initialState, action) {
    if (action.type === 'GET_WEATHER') {
        let copy = state;
        let id = action.payload;
        let path = "/data/2.5/weather?q=" + state.cities[id].name + "," + countryIndex(id) + "&appid=b41984b8b5135f1695c5faac30990138";
        fetch(path)
            .then((resp) => (
                resp.json().then(data =>
                    copy.cities[id].temp =  (data.main.temp - 273).toFixed(2))
            ));
        return copy;
    }
    return state;
}

function countryIndex(id) {
    if (id === 0) {
        return "RU"
    }
    if (id === 1) {
        return "UK"
    }
    if (id === 2) {
        return "FR"
    }
}

const store = createStore(Reducer,  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    //console.log('subscribe', store.getState());
});

ReactDOM.render((
    <App store={store} />
), document.getElementById('root'));
