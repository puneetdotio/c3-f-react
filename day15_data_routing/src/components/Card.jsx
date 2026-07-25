import React from "react";

const Card = ({ title, description, tag }) => {
	return (
		<article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-500">
			<div className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
				{tag}
			</div>
			<h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
			<p className="text-sm leading-6 text-slate-400">{description}</p>
		</article>
	);
};

export default Card;
