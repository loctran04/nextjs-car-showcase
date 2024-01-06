export default async function fetchCars(params = {}) {
    const searchParams = new URLSearchParams(params);
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${searchParams}`;
    const defaultOptions = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "676fd0a158msh136bc91f49f9b03p1a5c71jsndcf772ae4823",
            "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
    };
    try {
        const response = await fetch(url, { ...defaultOptions });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
