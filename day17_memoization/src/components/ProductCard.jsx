import { Star } from "lucide-react";
import React from "react";

const ProductCard = ({ product }) => {
	console.log(product);

	return (
		<div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-2">
			{/* product image */}
			<div className="bg-gray-100 h-64 flex items-center justify-center p-6 overflow-hidden">
				<img
					className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
					src={product.image}
					alt={product.title}
				/>
			</div>

			{/* card content */}
			<div className="p-5 flex flex-col gap-3">
				<span className="w-fit bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
					{product.category}
				</span>
				<h2 className="text-lg font-bold text-gray-800 line-clamp-1">
					{product.title}
				</h2>
				<p className="text-gray-500 text-sm line-clamp-2">
					{product.description}
				</p>

				{/* rating */}
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Star className="fill-yellow-400 text-yellow-400" size={18} />
						<span className="font-semibold">{product.rating.rate}</span>
						<span className="text-gray-500 text-sm">
							({product.rating.count} Reviews)
						</span>
					</div>

					<span className="text-2xl font-bold text-green-600">
						₹{product.price}
					</span>
				</div>

				{/* button */}
				<button className=" mt-2 bg-black text-white py-2 rounded-xl font-semibold hover:bg-gray-800 transition duration-300 cursor-pointer">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
