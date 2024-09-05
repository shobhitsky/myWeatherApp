import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelslike:33.47,
        humidity:74,
        temp: 28.99,
        temp_max: 28.99,
        temp_min: 28.94,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2 style={{textAlign:"center"}}>Weather App by <i>Shobhit</i></h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}