import {createStore} from "redux";

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
        let id = action.payload;
        copy.selected = id;
        let path = "https://api.openweathermap.org/data/2.5/weather?q=" + state.cities[id].name + "," + state.cities[id].index + "&appid=b41984b8b5135f1695c5faac30990138";
        fetch(path)
            .then((resp) => (
                resp.json().then(data =>
                {
                    copy.cities[id].temp =  (data.main.temp - 273).toFixed(2);
                    copy.cities[id].pres =  (data.main.pressure);
                    copy.cities[id].him =  (data.main.humidity);
                })
            ));
        console.log("New ", copy.cities[id].name, " temp is ", copy.cities[id].temp);
        return copy;
    }
    if (action.type === 'CHANGE_CITY') {
        let copy = state;
        copy.selected = action.payload;
        return copy;
    }
    return state;

}


const store = createStore(Reducer,  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    //console.log('subscribe', store.getState());
});

export default store;