
const CartProducts = ({ searchResults }) => {
  return (
    // Cards Grid
    <div className="grid justify-items-start gap-x-4 px-2 sm:grid-cols-3 lg:grid-cols-5">
        {searchResults.map((product) => (
        <div className="py-10 w-full h-96" key={product?.id}>
        <div className=" overflow-hidden rounded shadow-lg">
          <img src={product?.images[0]} alt="images" className="object-cover w-full  h-48" />
          <div className="px-2 py-1 text-xl font-bold text-gray-700">{product?.title}</div>
            <div className="flex flex-col">
              <p className=" px-2 py-1 text-lg text-gray-700">${product?.price}</p>
              <button className="rounded bg-red-600 hover:bg-red-500 px-2 py-1 text-white">Buy Now</button>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default CartProducts;
