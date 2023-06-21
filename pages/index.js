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
      <h1 className="font-bold text-4xl">Search products</h1>
      <div className="grid grid-cols-5">
        <CartProducts prod={prod} />
      </div>
    </div>
  );
};

export default Home;
