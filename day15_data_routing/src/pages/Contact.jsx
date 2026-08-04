import React from "react";

const Contact = () => {
	return (
		<div className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
			<div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 md:flex-row md:items-center md:justify-between md:p-10">
				<div className="max-w-xl">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
						Contact
					</p>
					<h2 className="text-3xl font-bold text-white sm:text-4xl">
						Let’s build something great together.
					</h2>
					<p className="mt-4 text-lg leading-8 text-slate-400">
						I’m always open to freelance opportunities, collaborations, and new
						ideas.
					</p>
				</div>

				<div className="w-full max-w-sm space-y-4 rounded-2xl border border-slate-800 bg-slate-950 p-6">
					<a
						href="mailto:puneet@example.com"
						className="block rounded-xl border border-slate-800 px-4 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
					>
						📧 Email: puneetdotio@gmail.com
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noreferrer"
						className="block rounded-xl border border-slate-800 px-4 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
					>
						🐦 Twitter / X
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noreferrer"
						className="block rounded-xl border border-slate-800 px-4 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
					>
						💼 LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
