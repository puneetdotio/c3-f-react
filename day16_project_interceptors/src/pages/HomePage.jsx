import React from "react";
import { NavLink } from "react-router";
import { User, Box, ShoppingBag, Sparkles } from "lucide-react";

const stats = [
	{
		title: "Active Users",
		value: "1,842",
		detail: "+12.8% from last week",
		icon: User,
		bg: "bg-blue-50 text-blue-700",
	},
	{
		title: "Products",
		value: "324",
		detail: "+4.2% inventory",
		icon: Box,
		bg: "bg-emerald-50 text-emerald-700",
	},
	{
		title: "Orders",
		value: "1,129",
		detail: "+8.9% completed",
		icon: ShoppingBag,
		bg: "bg-slate-100 text-slate-800",
	},
	{
		title: "Revenue",
		value: "₹72.4K",
		detail: "+16.3% last month",
		icon: Sparkles,
		bg: "bg-yellow-50 text-yellow-700",
	},
];

const HomePage = () => {
	return (
		<div className="space-y-8">
			<header className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
				<div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
							Dashboard
						</p>
						<h1 className="mt-4 text-4xl font-bold text-slate-900">
							Welcome back to E-comm Admin
						</h1>
						<p className="mt-4 text-base leading-7 text-slate-600">
							Monitor users, products, and orders in one place. Use this
							dashboard to check store performance, review recent activity, and
							jump into the areas that need attention.
						</p>
					</div>

					<div className="grid gap-3 sm:grid-cols-2">
						<NavLink
							to="/main/users"
							className="rounded-2xl bg-slate-900 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
						>
							Manage Users
						</NavLink>
						<NavLink
							to="/main/products"
							className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
						>
							View Products
						</NavLink>
					</div>
				</div>
			</header>

			<section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
				{stats.map((item) => {
					const Icon = item.icon;
					return (
						<div
							key={item.title}
							className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="flex items-center justify-between gap-3">
								<div className="space-y-2">
									<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
										{item.title}
									</h2>
									<p className="text-3xl font-bold text-slate-900">
										{item.value}
									</p>
								</div>
								<div
									className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${item.bg}`}
								>
									<Icon size={24} />
								</div>
							</div>
							<p className="mt-5 text-sm text-slate-500">{item.detail}</p>
						</div>
					);
				})}
			</section>

			<section className="grid gap-5 xl:grid-cols-[1.55fr_1fr]">
				<div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
								Quick overview
							</p>
							<h2 className="mt-3 text-2xl font-bold text-slate-900">
								Today’s store activity
							</h2>
						</div>
						<div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
							Updated 2 minutes ago
						</div>
					</div>

					<div className="mt-8 grid gap-4 md:grid-cols-2">
						<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
							<p className="text-sm text-slate-500">New registrations</p>
							<p className="mt-3 text-3xl font-bold text-slate-900">98</p>
							<p className="mt-2 text-sm text-slate-500">
								A strong start across all channels.
							</p>
						</div>
						<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
							<p className="text-sm text-slate-500">Pending orders</p>
							<p className="mt-3 text-3xl font-bold text-slate-900">24</p>
							<p className="mt-2 text-sm text-slate-500">
								Ready to fulfill and ship today.
							</p>
						</div>
					</div>

					<div className="mt-8 grid gap-4 sm:grid-cols-3">
						{[
							{ label: "Conversion", value: "5.8%" },
							{ label: "Average cart", value: "₹4,120" },
							{ label: "Returning", value: "38%" },
						].map((metric) => (
							<div
								key={metric.label}
								className="rounded-3xl bg-slate-100 p-5 text-center"
							>
								<p className="text-sm text-slate-500">{metric.label}</p>
								<p className="mt-3 text-2xl font-semibold text-slate-900">
									{metric.value}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
					<div className="flex items-center justify-between gap-4">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
								Spotlight
							</p>
							<h2 className="mt-3 text-2xl font-bold text-slate-900">
								Top product picks
							</h2>
						</div>
						<span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
							Live
						</span>
					</div>

					<div className="mt-8 space-y-5">
						{[
							{
								title: "Noise-canceling Headphones",
								price: "₹7,990",
								tag: "Audio",
							},
							{
								title: "Smart fitness band",
								price: "₹3,499",
								tag: "Wearables",
							},
						].map((item) => (
							<div
								key={item.title}
								className="rounded-3xl border border-slate-200 p-5 hover:border-slate-300"
							>
								<div className="flex items-center justify-between gap-4">
									<div>
										<p className="text-lg font-semibold text-slate-900">
											{item.title}
										</p>
										<p className="mt-2 text-sm text-slate-500">{item.tag}</p>
									</div>
									<p className="text-xl font-bold text-slate-900">
										{item.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
