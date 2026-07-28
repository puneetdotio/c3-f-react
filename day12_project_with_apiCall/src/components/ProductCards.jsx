import { ShoppingCart, Star } from "lucide-react";
import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCards = ({ product, isInCart }) => {
	let { setCartItems, decrementQuantity, incrementQuantity } =
		useContext(MyStore);

	let addToCart = () => {
		setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
		alert("Product added into cart");
	};

	return (
		<section className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:translate-y-2 hover:shadow-xl">
			<div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100 p-6">
				<img className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" src={product.image} alt={product.title} />
				<span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-white text-xs font-semibold capitalize">{product.category}</span>
			</div>

			{/* content */}
			<div className="space-y-4 p-5">
				{/* title */}
				<h2 className="line-clamp-2 text-lg font-bold text-gray-800">{product.title}</h2>
				{/* description */}
				<p className="line-clamp-3 text-sm text-gray-500">{product.description}</p>

				{/* rating */}
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<Star className="fill-yellow-400 text-yellow-400" width={18} />
						<span className="font-semibold">{product.rating.rate}</span>
						<span className="text-sm text-gray-500">({product.rating.count} Reviews)</span>
					</div>
					<span className="text-2xl font-bold text-green-600">₹{product.price}</span>
				</div>

				{/* button */}
				{isInCart ? (
					<button className="w-full bg-gray-500 rounded-xl flex items-center justify-center gap-5">
						<span className="text-2xl" onClick={() => decrementQuantity(product.id)}>-</span>
						<span className="text-2xl">{isInCart.quantity}</span>
						<span className="text-2xl" onClick={() => incrementQuantity(product.id)}>+</span>
					</button>
				) : (
					<button className="w-full bg-black text-white rounded-xl flex items-center justify-center gap-2 py-3 font-semibold transition hover:bg-gray-800" onClick={addToCart}>
						<ShoppingCart size={18} /> Add to Cart
					</button>
				)}
			</div>
		</section>
	);
};

export default ProductCards;
