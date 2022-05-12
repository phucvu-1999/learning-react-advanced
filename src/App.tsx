import React, { useState, useMemo } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState<
    { product: string; price: number }[]
  >([]);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");

  const total = useMemo(() => {
    const caluculateTotal = products.reduce(
      (result: number, prod: { product: string; price: number }) => {
        console.log("Re-calculate ...");

        const finalResult = result + prod.price;
        return finalResult;
      },
      0
    );

    return caluculateTotal;
  }, [products]);

  const handleAddItem = () => {
    setProducts([...products, { product, price: +price }]);
  };

  return (
    <div className="App">
      <div>
        Product: <input onChange={(e) => setProduct(e.target.value)} />
      </div>
      <div>
        Price: <input onChange={(e) => setPrice(e.target.value)} />
      </div>
      Total: {total}
      <br />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {products.map((prod) => (
          <li key={Math.random().toString()}>
            {prod.product} - {prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
