

const Pagination = ({ handlePreviousPage, handleNextPage, currentPage }) => {
  return (
    <div>
      <div className="flex mx-auto justify-center px-10 gap-4 mb-4">
      <button className="text-xl bg-red-600 text-white rounded-lg px-4 py-2" onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button className="text-xl bg-red-600 text-white rounded-lg px-4 py-2"  onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
