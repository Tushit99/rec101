import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setproduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/products/${id}`)
        .then((r) => r.json())
        .then((d) => setproduct(d));
    }
  }, [id]);

  return (
    <div className="power">
      Product id : {id}
      <div> Name:  {product.name} </div>
      <div> Price: {product.price} </div>
    </div>
  );
};

export default Product;
