import axios from "axios";
import { useEffect, useState } from "react";
import type { Products } from "./types";
import ProductsCard from './components/ProductsCard';

const App = () => {
	const [productsData, setProductsData] = useState<Products[]>([]);

	const getProductsData = async () => {
		const res = await axios.get("https://fakestoreapi.com/products");
		console.log(res);
		setProductsData(res.data);
	};

	useEffect(() => {
		getProductsData();
	}, []);

	return (
		<>
			App
			<div>
				{productsData.map((val) => {
					return <ProductsCard key={val.id} product={val} />;
				})}
			</div>
		</>
	);
};

export default App;
