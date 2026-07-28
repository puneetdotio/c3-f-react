import { Minus, Plus, Trash } from "lucide-react";
import React from "react";

const CartCards = ({ product }) => {
	console.log(product);
	return (
		<div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row">
			<div className="flex h-36 w-full items-center justify-center rounded-lg bg-gray-100 md:w-40">
				<img
					src={product.image}
					alt={product.title}
					className="h-28 object-contain"
				/>
			</div>

			{/* product details */}
			<div className="flex flex-1 flex-col justify-between">
				<div>
					<p className="mb-2 text-sm font-medium text-blue-600 capitalize">
						{product.category}
					</p>
					<h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
						{product.title}
					</h2>
					<p className="mt-2 line-clamp-2 text-sm text-gray-500">
						{product.description}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap items-center justify-between gap-4">
					{/* price */}
					<h3 className="text-2xl font-bold text-green-600">
						₹ {product.price}
					</h3>

					{/* quantity */}
					<div className="flex items-center rounded-lg border">
						<button className="p-2 hover:bg-gray-100">
							<Minus size={18} />
						</button>
						<span className="w-12 text-center font-semibold">
							{product.quantity}
						</span>
						<button className="p-2 hover:bg-gray-100">
							<Plus size={18} />
						</button>
					</div>

					{/* remove */}
					<button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
						<Trash size={18} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartCards;
