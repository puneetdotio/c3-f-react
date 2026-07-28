import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "./context/MyContext";
import CartScreen from "./pages/CartScreen";
import ProductCards from "./components/ProductCards";
import Navbar from "./components/Navbar";

const App = () => {
	let { isCartOpen, cartItems } = useContext(MyStore);

	const [productsData, setProductsData] = useState([]);

	let getProductsData = async () => {
		try {
			let res = await axios.get("https://fakestoreapi.com/products");
			setProductsData(res.data);
		} catch (error) {
			console.log("Error occur while fetching the products data", error);
		}
	};

	useEffect(() => {
		getProductsData();
	}, []);

	return (
		<div className="h-screen p-2 flex flex-col gap-4">

      <Navbar /> 
      
			{isCartOpen ? (
				<div>
					<CartScreen />
				</div>
			) : (
				<div className="grid grid-cols-4 gap-3">
            {productsData.map((val) => {
              let isInCart = cartItems.find((elem) => elem.id === val.id)
              
            return <ProductCards key={val.id} product={val} isInCart={isInCart} />
          })}
				</div>
			)}
		</div>
	);
};

export default App;
