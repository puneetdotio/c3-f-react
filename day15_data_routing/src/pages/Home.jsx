import React from "react";
import Card from "../components/Card";

const projects = [
	{
		title: "E-commerce Landing Page",
		description:
			"A polished, responsive storefront with a modern product-first layout.",
		tag: "UI Design",
	},
	{
		title: "Dashboard Experience",
		description:
			"An interactive dashboard built for clarity, speed, and a smooth user flow.",
		tag: "React",
	},
	{
		title: "Creative Portfolio",
		description:
			"A visually rich personal site designed to showcase work with ease.",
		tag: "Frontend",
	},
];

const Home = () => {
	return (
		<div className="min-h-screen bg-slate-950 text-slate-100">
			<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
				<div className="max-w-2xl">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
						Frontend Developer
					</p>
					<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
						Hello, I am <span className="text-cyan-400">Puneet Verma</span>
					</h1>
					<h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
						I build modern websites with React
					</h2>
					<p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
						A passionate frontend developer with 2+ years of learning
						experience, focused on creating responsive and user-friendly
						interfaces.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<button className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
							View Projects
						</button>
						<button className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400">
							Contact Me
						</button>
					</div>
				</div>

				<div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
							<p className="text-sm text-slate-400">Projects</p>
							<p className="mt-2 text-2xl font-semibold text-white">12+</p>
						</div>
						<div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
							<p className="text-sm text-slate-400">Focus</p>
							<p className="mt-2 text-2xl font-semibold text-white">
								Responsive UI
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
				<div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
							Recent Work
						</p>
						<h2 className="text-3xl font-semibold text-white">
							Selected projects
						</h2>
					</div>
					<p className="text-sm text-slate-400">
						A few examples of the interfaces I enjoy building.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<Card
							key={project.title}
							title={project.title}
							description={project.description}
							tag={project.tag}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
