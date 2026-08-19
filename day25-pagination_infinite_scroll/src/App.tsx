import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
	const limit = 10;
	const [page, setPage] = useState(0);
	const [products, setProducts] = useState(null);

	console.log("products", products);

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

	useEffect(() => {
		getProducts();
	}, [page]);

	const totalPages = Math.ceil(products?.total / limit);
	console.log(totalPages);

	return (
		<div className="flex flex-col gap-6 items-center">
			<div className="w-full p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products?.products.map((val) => (
					<ProductCard key={val.id} product={val} />
				))}
			</div>
			<div className="flex gap-5 items-center">
				<button
					disabled={page === 0}
					className="p-3 bg-red-700 text-white rounded-xl"
					onClick={() => setPage(page - 1)}
				>
					Prev
				</button>
				<p>
					{page + 1} of {totalPages}
				</p>
				<button
					disabled={page >= totalPages - 1}
					className="p-3 bg-red-700 text-white rounded-xl"
					onClick={() => setPage(page + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default App;
