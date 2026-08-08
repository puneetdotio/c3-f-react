import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
	const [searchData, setSearchData] = useState(null);
	const [productsData, setProductsData] = useState([]);
	const [scrollY, setScrollY] = useState(null);

	let throttle = false;

	let getProductsData = async () => {
		try {
			let res = await axios.get("https://fakestoreapi.com/products");
			console.log(res);
			setProductsData(res.data);
		} catch (error) {
			console.log("error in products api", error);
		}
	};

	// filter function
	let filteredData = () => {
		console.log("filter function running...");

		let result = productsData.filter((val) => {
			return val.title.toLowerCase().includes(searchData.toLowerCase());
		});

		setProductsData(result);
	};

	// debouncing...
	useEffect(() => {
		if (!searchData) return;

		let timeout = setTimeout(() => {
			filteredData();
		}, 700);

		return () => clearTimeout(timeout);
	}, 700);

	// throttle...
	useEffect(() => {
		let handleScroll = () => {
			if (throttle) return;
			throttle = true;

			console.log("scroll triggred...");
			setScrollY(window.scrollY);

			setTimeout(() => {
				throttle = false;
			}, 10000);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		getProductsData();
	}, []);
	return (
		<div>
			<h1>Debouncing...</h1>
			<input
				onChange={(e) => setSearchData(e.target.value)}
				type="text"
				placeholder="search products"
      />
      
      {
        productsData.map((val) => {
          return <h1 key={val.id}>{ val.title}</h1>
        })
      }
		</div>
	);
};

export default App;
