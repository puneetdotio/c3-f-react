import React, {  useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import Cart from "./components/Cart";
import { MyStore } from "./context/MyWebsite";

const App = () => {
  
	const [products, setProducts] = useState([]);
  
  let {  toggle} = useContext(MyStore)


	const getData = async () => {
		try {
			let res = await axios.get("https://fakestoreapi.com/products");
			console.log(res.data);
			setProducts(res.data);
		} catch (error) {
			console.log("error while api calling", error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="bg-green-200 h-auto p-3 flex flex-col gap-4">
			<Navbar  />

			{toggle ? (
				<div>
					<Cart  />
				</div>
			) : (
				<div className="grid grid-cols-4 gap-2">
					{products.map((elem) => {
						return <ProductCard key={elem.id} product={elem} />;
					})}
				</div>
			)}
		</div>
	);
};

export default App;
