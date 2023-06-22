import React, { useState, useEffect } from 'react';
import CartProducts from '@/components/CartProducts';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';



const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    // Fetch search results from the search bar API
    fetch(
      `https://dummyjson.com/products/search?q=${searchInput
        }`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.products);
        setTotalPages(Math.ceil(data.products.length / 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchInput]);

  useEffect(() => {
    // Fetch paginated results from the pagination API
    fetch(
      `https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.products);
        setTotalPages(Math.ceil(data.total / 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <SearchBar
        searchInput={searchInput}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <CartProducts searchResults={searchResults} />
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Home;

