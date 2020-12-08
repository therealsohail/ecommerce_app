import React from "react";

const ProductTable = ({ products }) => {
  console.log(products);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Item Name</th>
          <th>Item Price</th>
        </tr>
      </thead>

      <tbody>
        {products.map((prod) => (
          <tr key={prod.id}>
            <td>
              <img className="product-image" src={prod.img} alt="" />
            </td>
            <td>
              <h6>{prod.name}</h6>
              <div className="product-qty">
                <button className="qty-btn"> - </button>
                <span className="qty-value">0</span>
                <button className="qty-btn"> + </button>
              </div>
            </td>
            <td>
              <h6>{prod.price}</h6>
            </td>
          </tr>
        ))}
        {/* <tr>
          <td>Alvin</td>
          <td>Eclair</td>
          <td>$0.87</td>
        </tr>
        <tr>
          <td>Alan</td>
          <td>Jellybean</td>
          <td>$3.76</td>
        </tr>
        <tr>
          <td>Jonathan</td>
          <td>Lollipop</td>
          <td>$7.00</td>
        </tr>
       */}
      </tbody>
    </table>
  );
};

export default ProductTable;
