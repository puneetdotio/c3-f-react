import React from "react";

const services = [
	{
		title: "Web Development",
		description:
			"Build modern, responsive websites with strong layout and performance in mind.",
	},
	{
		title: "UI/UX Design",
		description:
			"Create clean interfaces and smooth user experiences for better engagement.",
	},
	{
		title: "React Development",
		description:
			"Develop interactive React apps with reusable components and scalable structure.",
	},
	{
		title: "Freelance Consulting",
		description:
			"Get guidance on frontend strategy, design decisions, and project improvements.",
	},
];

const Services = () => {
	return (
		<div className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="mb-10 max-w-2xl">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
						Services
					</p>
					<h1 className="text-3xl font-bold text-white sm:text-4xl">
						Helping businesses and creators build compelling digital
						experiences.
					</h1>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{services.map((service) => (
						<div
							key={service.title}
							className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-500"
						>
							<h2 className="mb-3 text-xl font-semibold text-white">
								{service.title}
							</h2>
							<p className="leading-7 text-slate-400">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
