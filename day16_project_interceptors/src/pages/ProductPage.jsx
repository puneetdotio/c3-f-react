import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let getProductsData = async () => {
		try {
			let res = await axiosInstance.get("/products");
			console.log("products api data => ", res);
			setProductsData(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log("error in product api", error);
		}
	};

	useEffect(() => {
		getProductsData();
	}, []);

	if (isLoading) {
		return <h1 className="text-6xl font-semibold">Loading Products</h1>;
	}
	return (
		<div className="grid grid-cols-4 gap-5">
			{productsData.map((val) => {
				return <ProductCard key={val.id} product={val} />;
			})}
		</div>
	);
};

export default ProductPage;
