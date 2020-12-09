import React from "react";

const ProductTable = ({ products, deleteProductFromCart }) => {
  console.log(products);
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
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
              {/* <div className="product-qty">
                <button className="qty-btn"> - </button>
                <span className="qty-value">{prod.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => increaseQuantity(prod.id, prod.quantity)}
                >
                  {" "}
                  +{" "}
                </button>
              </div> */}
            </td>
            <td>
              <h6>{prod.price}</h6>
            </td>
            <td>
              <i
                className="tiny material-icons delete-product-icon"
                onClick={() => deleteProductFromCart(prod)}
              >
                clear
              </i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
