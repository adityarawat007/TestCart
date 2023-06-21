import React from 'react';
import CartProducts from '@/components/CartProducts';

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=10');
  const responseData = await res.json();
  return {
    props: {
      prod: responseData,
    },
  };
};

const Home = ({ prod }) => {
  return (
    <div>
      <h1 class="mb-2 mt-10 text-center text-4xl">Search Product</h1>
      <div class="justify-center flex items-center">
        <input type="text" placeholder="Search..." class=" rounded-l-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" />
        <button class="rounded-r-md bg-red-600 px-4 py-2 text-white">Search</button>
      </div>
        <CartProducts prod={prod} />
    </div>
  );
};

export default Home;
