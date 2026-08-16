import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProducts } from "../hooks/productHooks";

const ShopPage = () => {
	const { filteredProducts, filterProducts, isLoading } = useProducts();

	return (
		<div className="min-h-screen bg-gray-100 p-8">
			<Filters filterProducts={filterProducts} />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
				{isLoading
					? Array.from({ length: 8 }).map((_, index) => (
							<ProductCardSkeleton key={index} />
						))
					: filteredProducts?.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
			</div>
		</div>
	);
};

export default ShopPage;
