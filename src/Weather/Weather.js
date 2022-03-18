import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Weather() {
    const dispatch = useDispatch();
    // const [state, setState] = useState({
    //     opacity: 1
    // })
    const [weatherState, setWeatherState] = useState({
        nameCity: ''
    })
    const storeState = useSelector(state => state.Reducer)
    return (
        <div style={{ opacity: storeState.opacity }}>
            <div className="container-fluid px-1 px-md-4 py-5 mx-auto">

                <div className="row d-flex justify-content-center px-3">
                    <div className="card">

                        <form className="submit">

                            <input type="" className="form-control" id="" value={weatherState.nameCity} aria-describedby="" onChange={(e) => {
                                setWeatherState({
                                    nameCity: e.target.value
                                })
                            }} placeholder='Input City Name' />
                            <button className='btn btn-light' type='submit' onClick={(e) => {
                                e.preventDefault()
                                dispatch({
                                    type: "GET_API",
                                    nameCity: weatherState.nameCity
                                })
                            }}> Check</button>
                        </form>

                        <h2 className="ml-auto text-light mr-4 mt-3 mb-0">{storeState.cityData.name}</h2>
                        <p className="ml-auto text-light mr-4 mb-0 med-font">{storeState.cityData.weather}</p>
                        <h1 className="ml-auto text-light mr-4 large-font">{storeState.cityData.temp}&#176;</h1>
                        <p className="time-font text-light mb-0 ml-4 mt-auto"> {storeState.cityData.feelLike}° <span className="sm-font">Feel Like</span></p>
                        <p className="ml-4 text-light mb-0">Max: {storeState.cityData.maxTemp}° Min: {storeState.cityData.minTemp}°</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
