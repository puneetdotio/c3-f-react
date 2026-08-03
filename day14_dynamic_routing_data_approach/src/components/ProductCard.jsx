import React from "react";
import { useNavigate } from "react-router";

export default function ProductCard({ product }) {

    let navigate = useNavigate();

    
	return (
		<div onClick={() => navigate(`/detail/${product.id}`)} className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
			<div className="flex h-72 items-center justify-center bg-slate-50 p-6">
				<img
					src={product.image}
					alt={product.title}
					className="h-full object-contain"
				/>
			</div>

			<div className="space-y-4 p-5">
				<div className="flex items-start justify-between gap-3">
					<span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium capitalize tracking-wide text-white">
						{product.category}
					</span>
					<span className="text-lg font-bold text-emerald-600">
						${product.price}
					</span>
				</div>

				<div>
					<h2 className="line-clamp-2 text-lg font-semibold leading-snug text-slate-800">
						{product.title}
					</h2>
					<p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
						{product.description}
					</p>
				</div>

				<div className="flex items-center justify-between border-t border-slate-200 pt-4">
					<div className="flex items-center gap-2">
						<span className="text-base text-yellow-500">★</span>
						<span className="text-sm font-medium text-slate-700">
							{product.rating?.rate ?? "N/A"}
						</span>
						<span className="text-sm text-slate-500">
							({product.rating?.count ?? 0} reviews)
						</span>
					</div>

					<button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
