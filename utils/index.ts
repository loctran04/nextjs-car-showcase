import { env } from "process";

export default async function fetchCars(params = {}) {
    const searchParams = new URLSearchParams(params);
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${searchParams}`;
    const defaultOptions = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.API_KEY || "",
            "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
    };
    try {
        const response = await fetch(url, defaultOptions);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
