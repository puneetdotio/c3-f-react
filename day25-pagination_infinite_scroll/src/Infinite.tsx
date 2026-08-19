import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
	const limit = 40;

	const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery({
			queryKey: ["products"],
			queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
			initialPageParam: 0,
			getNextPageParam: (lastPage, allPage) => {
				const loadedData = allPage.length * limit;
				if (loadedData < lastPage.total) return loadedData;
				return undefined;
			},
		});

	if (isPending) return "Loading...";

	console.log(data);

	const allProducts = data?.pages?.flatMap((val) => val.products) ?? [];

	return (
		<div className="flex p-5 flex-col gap-6 items-center">
			<div className=" w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
				{allProducts.map((val) => (
					<ProductCard key={val.id} product={val} />
				))}
			</div>
			{hasNextPage && (
				<button onClick={() => fetchNextPage()}>
					{isFetchingNextPage ? "Loading..." : "Load more"}
				</button>
			)}
		</div>
	);
};

export default Infinite;
