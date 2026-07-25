import React, { useContext } from "react";
import { MyStore } from "../context/MyWebsite";

const Cart = () => {
    let {cartItems} = useContext(MyStore)

	return (
		<div className="min-h-screen bg-slate-100 p-4 sm:p-6 md:p-8">
			<div className="mx-auto max-w-6xl">
				<h1 className="mb-6 text-2xl font-bold text-slate-800">My Cart</h1>

				{cartItems.length === 0 ? (
					<div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
						<h2 className="text-xl font-semibold text-slate-700">
							Your cart is empty
						</h2>
						<p className="mt-2 text-sm text-slate-500">
							Add some products to see them here.
						</p>
					</div>
				) : (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
							>
								<div className="flex h-64 items-center justify-center bg-slate-50 p-4">
									<img
										src={item.image}
										alt={item.title}
										className="h-full object-contain"
									/>
								</div>

								<div className="space-y-4 p-5">
									<div className="flex items-start justify-between gap-3">
										<span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium capitalize tracking-wide text-white">
											{item.category}
										</span>
										<span className="text-lg font-bold text-emerald-600">
											${item.price}
										</span>
									</div>

									<div>
										<h2 className="line-clamp-2 text-lg font-semibold leading-snug text-slate-800">
											{item.title}
										</h2>
										<p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
											{item.description}
										</p>
									</div>

									<div className="flex items-center justify-between border-t border-slate-200 pt-4">
										<div className="flex items-center gap-2">
											<span className="text-yellow-500">★</span>
											<span className="text-sm font-medium text-slate-700">
												{item.rating?.rate ?? "N/A"}
											</span>
											<span className="text-sm text-slate-500">
												({item.rating?.count ?? 0})
											</span>
										</div>

										<button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
											Remove
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
