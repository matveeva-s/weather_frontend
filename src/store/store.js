import {createStore} from "redux";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

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
        console.log("GET_WEATHER called");
        let copy = state;
        let id = action.payload[0];
        let data = action.payload[1];
        copy.cities[id].temp =  (data.temp - 273).toFixed(2);
        copy.cities[id].pres =  data.pressure;
        copy.cities[id].him =  data.humidity;
        console.log("New ", copy.cities[id].name, " temp is ", copy.cities[id].temp);
        return copy;
    }
    if (action.type === 'CHANGE_CITY') {
        console.log("CHANGE_CITY called");
        let copy = state;
        copy.selected = action.payload;
        return copy;
    }
    return state;

}


const store = createStore(Reducer,  composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    //console.log('subscribe', store.getState());
});

export default store;