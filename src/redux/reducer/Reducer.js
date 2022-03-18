import { DO_IT, OFF_LOADING, ON_LOADING } from "../action/action"

const initialState = {
    opacity: 1,
    cityData: {
        name: 'Toronto',
        weather: 'Snow',
        temp: '-20',
        feelLike: '08:30',
        maxTemp: '10',
        minTemp: '10'
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case DO_IT: {
            let newName = action.data.city.name;
            let newWeather = action.data.list[0].weather[0].description
            let newTemp = action.data.list[0].main.temp
            let newFeelLike = action.data.list[0].main.feels_like
            let newMinTemp = action.data.list[0].main.temp_min
            let newMaxTemp = action.data.list[0].main.temp_max



            state.cityData.name = newName
            state.cityData.weather = newWeather
            state.cityData.temp = newTemp
            state.cityData.feelLike = newFeelLike
            state.cityData.maxTemp = newMaxTemp
            state.cityData.minTemp = newMinTemp
            return { ...state }
        }
        // eslint-disable-next-line no-fallthrough
        case ON_LOADING: return { ...state, opacity: 0.1 }
        case OFF_LOADING: return { ...state, opacity: 1 }

        default: return { ...state }
    }

}