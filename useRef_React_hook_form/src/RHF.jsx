import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
    let { register, handleSubmit, reset, formState: {errors}} = useForm();

    const handleForm = (data) => {
        console.log(data)
        
        reset();
    }

	return (
		<div className="w-180 h-screen">
			<form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-3">
				<input {...register("productName")} type="text" placeholder="product name" className="p-2 border border-gray-400 outline-0 rounded-2xl" />
				<input {...register("price")} type="text" placeholder="price" className="p-2 border border-gray-400 outline-0 rounded-2xl" />
				<input {...register("category")} type="text" placeholder="category" className="p-2 border border-gray-400 outline-0 rounded-2xl" />
				<input {...register("image")} type="text" placeholder="image" className="p-2 border border-gray-400 outline-0 rounded-2xl" />
                <button className="py-3 bg-blue-700 text-blue-100 rounded-2xl">Create</button>
			</form>
		</div>
	);
};

export default RHF;
