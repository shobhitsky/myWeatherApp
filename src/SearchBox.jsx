import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0cea8a48b6f5718cdeecd16638d08ce5";

    const getWeatherInfo = async () => {
        try{
            let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result ={
            city:city,
            temp:jsonResponse.main.temp,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
          throw err;
    }
};

    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    } catch (err) {
      setError(true)
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
}

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <b><p style={{color:"red"}}>No Such Place Exists!</p></b>}
            </form>
        </div>
    )
}