import { useState } from "react";

const ProductCard = ({ product }) => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="w-full max-w-sm rounded-2xl bg-zinc-100 border border-zinc-800 p-5 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500 transition-all duration-300">
			{/* product image */}
			<div className="h-60 w-full bg-zinc-200 rounded-xl overflow-hidden">
				<img className="h-full w-full object-contain p-4 hover:scale-105 transition-transform duration-300" src={product.thumbnail} alt={product.title} />
			</div>

			{/* product info */}
			<div className="mt-5">
				<h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>
				<p className="mt-2 text-2xl font-bold text-green-400">₹{product.price}</p>
				<p className="mt-1 text-sm bg-zinc-300 p-1 rounded">
					Stock: <span className="text-green-700 font-semibold">{product.stock}</span>
				</p>

				{/* quantity */}
				<div className="flex justify-center bg-zinc-300 rounded p-1 w-full items-center gap-3 mt-3">
					<button onClick={() => setQuantity(quantity - 1)} className="w-10 h-10 rounded-lg bg-zinc-500 hover:bg-zinc-400 transition">-</button>
					<span className="w-10 text-center text-lg font-semibold">{quantity}</span>
					<button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-zinc-500 hover:bg-zinc-400 transition">+</button>
				</div>

				{/* add to cart */}
				<button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 rounded py-1 font-semibold">Add to Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
