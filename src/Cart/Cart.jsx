import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=All")
      .then((res) => res.json())
      .then((data) => setItems(data.meals));
  }, []);
  console.log(items);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9 bg-slate-200">
        <div className="grid grid-cols-2">
          {items.map((item) => (
            <Product />
          ))}
        </div>
      </div>
      <div className="col-span-3 bg-slate-400">
        <p>this is side cart</p>
      </div>
    </div>
  );
};

export default Cart;
