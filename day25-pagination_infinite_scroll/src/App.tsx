import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
	const limit = 10;
	const [products, setProducts] = useState(null);
	const [page, setPage] = useState(0);


	const getProducts = async () => {
		try {
			const res = await axios.get(
				`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
			);
			setProducts(res.data);
		} catch (error) {
			console.log("Error in products api ", error);
		}
	};

	const totalPages = Math.ceil(products?.total / limit);

	useEffect(() => {
		getProducts();
	}, [page]);

	return (
		<div className="flex flex-col gap-6 items-center">
			<div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{products?.products.map((val) => (
					<ProductCard key={val.id} product={val} />
				))}
			</div>
			<div className="flex gap-5 items-center">
				<button
					className="p-3 bg-red-700 text-white rounded-xl"
					onClick={() => setPage(page - 1)}
					disabled={page === 0}
				>
					Prev
				</button>
				<p>
					{page + 1} of {totalPages}
				</p>
				<button
					className="p-3 bg-red-700 text-white rounded-xl"
					onClick={() => setPage(page + 1)}
					disabled={page >= totalPages - 1}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default App;
