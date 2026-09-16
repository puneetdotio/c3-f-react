import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import type { Product } from "./types";

const App = () => {
	const [productsData, setProductsData] = useState<Product[]>([]);

	const getProductsData = async () => {
		try {
			const res = await axios.get(`https://fakestoreapi.com/products`);
			console.log(res);
			setProductsData(res.data);
		} catch (error) {
			console.log("Error while fetching the products data", error);
		}
	};

	useEffect(() => {
		getProductsData();
	}, []);

  return <div>
    {productsData.map((val) => {
      return <ProductCard key={val.id} product={val} />
    })}
  </div>;
};

export default App;
