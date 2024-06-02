import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function Weatherapp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Mumbai",
            feelslike: 24.43,
            temp: 25.56,
            tempMin: 25.86,
            tempMax: 45.87,
            humidity: 45,
            weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

return(<div style={{textAlign: "center"}}>
    <h2>Weather app by Neha</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </div>);
}