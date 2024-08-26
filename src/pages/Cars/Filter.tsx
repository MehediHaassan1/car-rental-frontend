const Filter = () => {
    return (
        <div className="p-2 rounded w-full mx-auto ">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Filter For Car Type
                </label>
                <select
                    id="car-type"
                    className="bg-white border  text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg mb-10"
                >
                    <option selected>Car Type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="truck">Truck</option>
                    <option value="convertible">Convertible</option>
                </select>
            </div>
            <div>
                <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Price Range
                </label>
                <select
                    id="price-range"
                    className="bg-white border  text-gray-900 text-sm rounded  block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg focus:outline-red-700 "
                >
                    <option selected>Price Range</option>
                    <option value="1-100">$1 - $100</option>
                    <option value="101-200">$101 - $200</option>
                    <option value="201-300">$201 - $300</option>
                    <option value="301-400">$301 - $400</option>
                    <option value="401-500">$401 - $500</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
