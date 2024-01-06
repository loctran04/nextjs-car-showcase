import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import fetchCars from "@/utils";
import CarCard from "@/components/CarCard";
import { CarProperty } from "@/types";
export default async function Home() {
    const allCars = await fetchCars({ model: "corolla" });
    console.log(allCars);
    const isListEmpty = !allCars || !allCars.length;
    return (
        <main className="overflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore the cars you might like</p>
                </div>
                <div className="home__filters">
                    <SearchBar />
                    <div className="home__filter-container">
                        <CustomFilter title="fuel" />
                        <CustomFilter title="year" />
                    </div>
                </div>
                {!isListEmpty ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars.map((car: CarProperty) => (
                                <CarCard car={car}></CarCard>
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">
                            Oops! No result
                        </h2>
                        <p>{allCars.message}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
