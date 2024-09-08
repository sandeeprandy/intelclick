import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Card } from "antd";
import { CloudTwoTone } from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; 
import { useParams } from 'react-router-dom';
import "./Weather.css";
import { DNA ,TailSpin} from 'react-loader-spinner';

function Weather() {
    const { stateName } = useParams(); // Get city name from URL params
    const [city, setCity] = useState(stateName || ""); // Initialize with stateName or empty string
    const [cityWeather, setCityWeather] = useState(null); // Holds the weather data
    const [loading, setLoading] = useState(false); // For showing a loader during API call
    const [data, setData] = useState([{ time: 5, temperature: 25 }]); // Data for the temperature chart
    const date = new Date().toLocaleDateString();
    const times = new Date().toLocaleTimeString();

    // Function to fetch weather data for the given city
    const fetchCityWeather = async (cityName) => {
        if (!cityName) return; // Prevent API call if cityName is empty
        setLoading(true); // Show loader

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=23da13304a0096bcdf900edc15a66563`
            );
            setCityWeather(response.data); // Set the fetched weather data
            const newData = [{ time: times, temperature: response.data.main.temp }];
            setData(newData); // Update chart data
        } catch (error) {
            console.error("Error fetching the weather data", error);
        } finally {
            setLoading(false); // Hide loader
        }
    };

    // Fetch weather data on component mount if stateName exists (from URL params)
    useEffect(() => {
        if (stateName) {
            fetchCityWeather(stateName); // Fetch weather for city in URL
        }
    }, [stateName]);

    // Handle input change and search button click
    const handleSearch = () => {
        if (city) {
            fetchCityWeather(city); // Fetch weather based on the input city
        }
    };

    return (
        <>
            <header className="header">
                <h2>Type city name</h2>
                <Input
                    className="input"
                    placeholder="Enter city name"
                    value={city} // Controlled input value
                    onChange={(e) => setCity(e.target.value)} // Update city state on input change
                />
                <Button type="primary" className="button" onClick={handleSearch}>
                    Search
                </Button>
            </header>

            <div className="App">
                <div className="searchCountys">
                    <div className="weatherReport">
                        {loading ? (
                            <p>Loading...</p> // Show loader when fetching data
                        ) : cityWeather ? (
                            <>
                                <p>Today date: {date}</p>
                                <h1>City name: {cityWeather.name}</h1>
                                <div className="cloudy">
                                    <CloudTwoTone style={{ fontSize: "105px" }} />
                                    <p style={{ fontSize: "25px" }}>{cityWeather.main.temp} F</p>
                                </div>
                                <h1>{cityWeather.weather[0].description}</h1>
                                <div className="humidity">
                                    <p className="humidityItems">
                                        Humidity <br /> {cityWeather.main.humidity}
                                    </p>
                                    <p className="humidityItems">
                                        Wind speed <br /> {cityWeather.wind.speed}
                                    </p>
                                </div>
                                <div className="humidity">
                                    <p className="humidityItems">
                                        Min temp <br /> {cityWeather.main.temp_min}
                                    </p>
                                    <p className="humidityItems">
                                        Max temp <br /> {cityWeather.main.temp_max}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <p>No weather data available</p>
                        )}
                    </div>
                </div>

                <div className="chart">
                    {cityWeather && (
                        <Card title={`Temperature graph of ${cityWeather.name}`} className="charts">
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="time" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card>
                    )}
                </div>
            </div>
        </>
    );
}

export default Weather;
