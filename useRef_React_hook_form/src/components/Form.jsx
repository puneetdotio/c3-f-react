import React, { useRef, useState } from "react";

const Form = () => {
	console.log("form rendering...");

	const [products, setProducts] = useState({});
	console.log("this is product ", products);

	let formRef = useRef({});
    console.log(formRef);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            pName: formRef.current.productName.value,
            price: formRef.current.price.value,
            category: formRef.current.category.value,
            image: formRef.current.image.value,
        }

        setProducts(obj)

    }

	return (
		<div className="w-80">
			<form onSubmit={handleSubmit} className="bg-white p-5 rounded-2xl flex flex-col gap-3">
                <input
                    ref={(e) => formRef.current.productName = e}
					className="p-2 border border-gray-400 outline-0 rounded-2xl"
					type="text"
					placeholder="product name"
				/>
                <input
                    ref={(e) => formRef.current.price = e}
					className="p-2 border border-gray-400 outline-0 rounded-2xl"
					type="text"
					placeholder="price"
				/>
				<select ref={(e) => formRef.current.category = e} className="p-2 border border-gray-400 outline-0 rounded-2xl">
					<option value="MEN">Men</option>
					<option value="WOMEN">Women</option>
					<option value="KIDS">Kids</option>
				</select>
                <input
                    ref={(e) => formRef.current.image = e}
					className="p-2 border border-gray-400 outline-0 rounded-2xl"
					type="text"
					placeholder="image"
				/>
				<button className="bg-blue-700 text-blue-100 py-3 rounded-2xl font-bold">
					Create
				</button>
			</form>
		</div>
	);
};

export default Form;
