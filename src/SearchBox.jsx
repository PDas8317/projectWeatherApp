import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import "./SearchBox.css"
export default function SearchBox({ getNewInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    let Api_url = "https://api.openweathermap.org/data/2.5/weather"
    let Api_key = "df73ee9c4674a6ac46e3a2e4f49423cd";

    let getWeatherInfo = async () => {

        try {
            let response = await fetch(`${Api_url}?q=${city}&appid=${Api_key}&units=metric`);
            let jsonRes = await response.json();

            console.log(jsonRes);

            let info = {
                city: city,
                temp: jsonRes.main.temp,
                temp_min: jsonRes.main.temp_min,
                humidity: jsonRes.main.humidity,
                feels_like: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description

            }

            return info
        }
        catch (err) {
            throw err;
        }
    }


    function inputHandler(event) {
        setCity(event.target.value)
    }


    let formHandler = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let updatedInfo = await getWeatherInfo();
            getNewInfo(updatedInfo);
            setError(false);
        } catch {
            setError(true);
        }

    }

    return (
        <div >
            <h1 style={{ color: "white", textDecorationLine: "underline wavy" }}>Weather report</h1>
            <form onSubmit={formHandler}>

                <div >
                    <TextField
                        id="filled-basic"
                        label="City-Name"
                        variant="filled"
                        onChange={inputHandler}
                        value={city}
                        required
                        className="inp"
                    />

                    <button
                        variant="contained"
                        type="submit"
                        className="btn"
                    >
                        <SearchIcon />
                    </button>

                    <br></br>
                    <br></br>

                    {error && <Alert severity="warning">No such place exists in this API</Alert>}

                </div>
            </form>
        </div>
    )
}