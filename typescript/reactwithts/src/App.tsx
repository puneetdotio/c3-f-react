import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from './components/ProductCard';
import type { Product } from "./types";

const App = () => {

	const [productsData, setProductsData] = useState<Product[]>([]);

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      console.log(res)
      setProductsData(res.data)
    } catch (error) {
      console.log("Error in products api", error)
    }
  }

  useEffect(() => { getProductsData() }, [])
  
  return (
    <div>
      <h1>Count is { 0}</h1>
      <button>Increment</button>
			<div>
				{productsData.map((val) => {
					return <ProductCard key={val.id} product={val} />;
				})}
			</div>
		</div>
	);
};

export default App;
