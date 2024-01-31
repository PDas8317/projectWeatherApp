import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css"
export default function WeatherApp() {
    let [info, setInfo] = useState(
        {
            city: "DreamLand",
            temp: 2,
            temp_min: -6,
            feels_like: 1,
            humidity: 20,
            weather: "Dreamy"
        }
    )

    function getNewInfo(WeatherResult) {
        setInfo(WeatherResult);
    }
    return (
        <div className="main">
            <SearchBox getNewInfo={getNewInfo} />
            <InfoBox info={info} />
        </div>
    )
}