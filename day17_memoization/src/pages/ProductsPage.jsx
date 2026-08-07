import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstace";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let getProductsData = async () => {
		try {
			let res = await axiosInstance.get("/products");
			setProductsData(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log("error in products api", error);
		}
	};

	useEffect(() => {
		getProductsData();
	}, []);

	if (isLoading) {
		return <h1 className="text-4xl font-bold">Loading Products</h1>;
	}

	return (
		<div className="grid grid-cols-4 gap-5">
			{productsData.map((val) => {
				return <ProductCard key={val.id} product={val} />;
			})}
		</div>
	);
};

export default ProductsPage;
