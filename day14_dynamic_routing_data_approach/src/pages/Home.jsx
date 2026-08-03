import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
	let { productsData, setProductsData } = useContext(MyStore);

	let getProductsData = async () => {
		try {
			let res = await axios.get("https://fakestoreapi.com/products");
            
			setProductsData(res.data);
		} catch (error) {
			console.log("Error while fetching the products data", error);
		}
	};

	useEffect(() => {
		getProductsData();
	}, []);

	return (
		<div className="grid grid-cols-4 gap-3 p-2">
			{productsData.map((val) => {
				return <ProductCard key={val.id} product={val} />;
			})}
		</div>
	);
};

export default Home;
