import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ProductCard from "./components/ProductCard";

const App = () => {
	const [productsData, setProductsData] = useState<Product[]>([]);

	const getProductsData = async () => {
		const res = await axios.get("https://fakestoreapi.com/products");
		console.log(res.data);
		setProductsData(res.data);
	};

	useEffect(() => {
		getProductsData();
	}, []);

	return (
		<div>
			{productsData.map((val) => {
				return <ProductCard key={val.id} product={val} />;
			})}
		</div>
	);
};

export default App;
