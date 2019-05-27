import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from './components/App'

const initialState = {
    "selected": 0,
    "cities": [
        {
            "name" : "Moscow",
            "index": "RU",
            "temp": 0,
            "pres": 0,
            "him": 0,
        },
        {
            "name": "London",
            "index": "UK",
            "temp": 0,
            "pres": 0,
            "him": 0,
        },
        {
            "name" : "Paris",
            "index": "FR",
            "temp": 0,
            "pres": 0,
            "him": 0,
        },
    ]
};

function Reducer(state = initialState, action) {
    if (action.type === 'GET_WEATHER') {
        let copy = state;
        let id = action.payload;
        copy.selected = id;
        let path = "/data/2.5/weather?q=" + state.cities[id].name + "," + state.cities[id].index + "&appid=b41984b8b5135f1695c5faac30990138";
        fetch(path)
            .then((resp) => (
                resp.json().then(data =>
                {
                    copy.cities[id].temp =  (data.main.temp - 273).toFixed(2);
                    copy.cities[id].pres =  (data.main.pressure);
                    copy.cities[id].him =  (data.main.humidity);
                })
            ));
        return copy;
    }
    return state;
}


const store = createStore(Reducer,  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    //console.log('subscribe', store.getState());
});

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
