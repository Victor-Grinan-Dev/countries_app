import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const openWeather = "https://api.openweathermap.org/data/2.5/weather";
const secretKey = "80e877059407012cbef59f8ac82bcf1c";
let city = "Helsinki";
let CountryCode = "fin";

function Test() {
    const [data, setData] = useState({})
    useEffect(()=>{
        const weather = axios.get(`${openWeather}?q=${city},${CountryCode}&appid=${secretKey}&units=metric`).then(res=>{
            setData(res.data);
        })

    },[])
  
  return (
    <div style={{
        color:"beige"
    }}>
        <h1>Test:</h1>
        <h1>The weather in {data.name}: {data.main.temp}°C</h1>
        <ul>

        </ul>
        {console.log(data.main.temp)}

    </div>
  )
}

export default Test;