import CarCard from "./CarCard";
import Filter from "./Filter";

const Cars = () => {
    const cars = [
        {
            id: 1, // Added id for key prop
            image: "https://i.ibb.co/DC3J4fN/slideTwo.jpg",
            title: "Delux",
            price: "$68",
            description:
                "Great explorer of the truth, the master-builder of human happiness.",
        },
        {
            id: 2,
            image: "https://i.ibb.co/DC3J4fN/slideTwo.jpg",
            title: "Economy",
            price: "$58",
            description:
                "Great explorer of the truth, the master-builder of human happiness.",
        },
        {
            id: 3,
            image: "https://i.ibb.co/DC3J4fN/slideTwo.jpg",
            title: "Economy",
            price: "$20",
            description:
                "Great explorer of the truth, the master-builder of human happiness.",
        },
        // ... other cars
    ];

    return (
        <>
            <div className="container gap-4 mx-auto flex flex-col md:flex-row justify-around mt-20 px-4 relative">
                <div
                    
                    className="bg-red-200 h-fit rounded w-full md:w-80 p-4 mb-4 md:mb-0"
                >
                    <Filter />
                </div>
                <div className="">
                    <div
                        
                        className="mb-10 p-4 rounded bg-red-200"
                    >
                        <input
                            id="search"
                            type="search"
                            placeholder="Search Here..."
                            className="p-4 border rounded-md w-full bg-white shadow-lg"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cars.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cars;
