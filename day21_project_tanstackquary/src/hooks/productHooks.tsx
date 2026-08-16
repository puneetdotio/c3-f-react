import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProductsDataApi } from "../api/productApi";

export const useProductApi = () => {
	console.log("useProductApi rendering...");

	const [filteredProducts, setFilteredProducts] = useState(null);

	const { isPending, data, error } = useQuery({
		queryKey: ["products"],
		queryFn: getProductsDataApi,
	});

	let filteredData;

	let filterProducts = (searchParams) => {
		filteredData = data.filter((val) => {
			val.title.toLowerCase().includes(searchParams.toLowerCase());
		});

		if (filteredData) {
			setFilteredProducts(filteredData);
		}

		console.log(filteredData);
	};

	useEffect(() => {
		setFilteredProducts(data);
	}, [data, filteredData]);

	return {
		isPending,
		data,
		error,
		filterProducts,
		filteredProducts,
	};
};

export const useProducts = () => {
	const [productsData, setProductsData] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getProducts = async () => {
		const data = await getProductsDataApi();
		setProductsData(data);
		setFilteredProducts(data);
		setIsLoading(true);
	};

	let filterProducts = (searchParams) => {
		let filteredData = productsData.filter((val) => {
			val.title.toLowerCase().includes().includes(searchParams.toLowerCase());
		});

		if (filteredData) {
			setFilteredProducts(filteredData);
		}

		console.log(filteredData);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return {
		productsData,
		setProductsData,
		isLoading,
		setIsLoading,
		filteredProducts,
		setFilteredProducts,
		filterProducts,
	};
};
