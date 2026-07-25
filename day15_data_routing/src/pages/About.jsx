import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

const About = () => {
	return (
		<div className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8" >
			<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
				<div className="flex justify-center lg:justify-start">
					<img
						src="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="profile image"
						className="h-72 w-full max-w-sm rounded-3xl object-cover shadow-2xl shadow-cyan-950/40 sm:h-80"
					/>
				</div>

				<div className="space-y-8">
					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
							About Me
						</p>
						<h1 className="text-3xl font-bold text-white sm:text-4xl">
							I create clean, modern, and user-friendly web experiences.
						</h1>
						<p className="mt-4 text-lg leading-8 text-slate-400">
							I’m a frontend developer focused on building responsive interfaces that
							feel smooth, intuitive, and visually appealing.
						</p>
					</div>

					<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
						<h2 className="mb-4 text-xl font-semibold text-white">Skills</h2>
						<div className="flex flex-wrap gap-3">
							{skills.map((skill) => (
								<span
									key={skill}
									className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
						<h2 className="mb-4 text-xl font-semibold text-white">Education</h2>
						<div className="space-y-3 text-slate-300">
							<div className="rounded-xl bg-slate-950 p-4">
								<p className="font-semibold text-white">B.Tech in Computer Science</p>
								<p className="text-sm text-slate-400">2022 - 2026</p>
							</div>
							<div className="rounded-xl bg-slate-950 p-4">
								<p className="font-semibold text-white">Diploma in Computer Science</p>
								<p className="text-sm text-slate-400">2019 - 2022</p>
							</div>
						</div>
					</div>
                </div>
            </div>
            </div>
	);
};

export default About;
