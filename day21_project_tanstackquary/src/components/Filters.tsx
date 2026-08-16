const Filters = ({ filterProducts }) => {
	console.log(filterProducts);

	return (
		<div className="p-3 border w-full flex gap-6 rounded border-gray-500">
			<div className="flex gap-8 w-full">
				<input onChange={(e) => filterProducts(e.target.value)} type="text" className="p-2 outline-0 border w-full rounded" placeholder="Search products..." />
				<button className="p-2 bg-white text-black border rounded">Search</button>
			</div>
			<div>
				<span>Select category</span>
				<select className="p-2 bg-white text-black border-0 outline-0 rounded">
					<option value="grocery">Grocery</option>
					<option value="beauty">Beauty</option>
					<option value="furniture">Furniture</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;
