import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import CartCards from "../components/CartCards";

const CartScreen = () => {
	let { cartItems } = useContext(MyStore);

	return (
		<div className="h-[95%] gap-4 text-3xl grid grid-cols-3">
			{cartItems.map((elem) => {
				return <CartCards key={elem.id} product={elem} />;
			})}
		</div>
	);
};

export default CartScreen;
