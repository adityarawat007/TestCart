import React from 'react';

const CartProducts = ({ prod }) => {
  return (
    <div>
      {prod.products.map((pro) => (
        <div key={pro.id}>
          <h3>{pro.title}</h3>
          <h3>{pro.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
