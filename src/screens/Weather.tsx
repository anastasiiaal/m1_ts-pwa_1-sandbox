import { useEffect, useState } from "react";

const API_KEY = "c05eda91cb194c77be371908232609";
const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`

interface WeatherData {
    location: {
        name: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
}

export default function Weather () {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState<WeatherData | null>(null);

    useEffect(() => {
        if (inputValue.trim() !== "") {
            async function fetchData () {
                try {
                    const response = await fetch(baseUrl + inputValue);
                    if (!response.ok) {
                        throw new Error("Failed to fetch data");
                    }
                    const result = await response.json();
                    setData(result);
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                }
            };

            fetchData();
        } else {
            setData(null)
        }
    }, [inputValue]);

    return (
        <>
            <div className="container">
                <h3 className="mb-4 text-center">Weather App</h3>
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Enter city name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {
                    data !== null ? (
                        <div className="card mx-auto">
                            <div className="card-body text-center">
                                <img
                                    src={data.current?.condition.icon}
                                    alt="Weather Icon"
                                    style={{ width: "80px" }}
                                />
                                <h5 className="card-title">{data.location?.name}</h5>
                                <p className="card-text">
                                    {data.current?.temp_c}°C - {data.current?.condition.text}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center" role="alert">
                            No city to display.
                        </p>
                    )
                }
            </div>
        </>
    );
}