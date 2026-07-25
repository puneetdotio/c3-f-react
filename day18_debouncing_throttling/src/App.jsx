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
			console.log(("Error while fetching the products data", error));
		}
	};

	let filteredData = () => {
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
	}, [searchData]);

	// throttling...
  useEffect(() => {
    let handleScroll = () => {
      if(throttle) return

      console.log("scroll triggered...")
      throttle = true;
      setScrollY(window.scrollY)

      setTimeout(() => { throttle = false}, 10000)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

	useEffect(() => {
		getProductsData();
	}, []);

	return (
		<div>
			<h1>Debouncing...</h1>

			<input
				style={{ padding: "10px 30px" }}
				type="text"
				placeholder="search products"
				onChange={(e) => setSearchData(e.target.value)}
			/>

			{productsData.map((val) => {
				return <h1 key={val.id}>{val.title}</h1>;
			})}
		</div>
	);
};

export default App;
