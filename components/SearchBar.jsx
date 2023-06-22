

const SearchBar = ({ searchInput, handleInputChange, handleSearch }) => {
  return (
    <div>
      <h1 className="mb-2 mt-10 text-center text-4xl">Search Product</h1>
      <div className="justify-center my-5 mx-4 flex items-center">
      <input
        className=" rounded-l-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className="rounded-r-md bg-red-600 px-4 py-2 text-white" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
