import React from "react";

const StateCard = ({ title, value, icon, bedge }) => {
	return (
		<div>
			<div>
				<div>{icon}</div>
				<span>{bedge}</span>
			</div>

			<div>
				<p>{title}</p>
				<h1>{value}</h1>
			</div>
		</div>
	);
};

export default StateCard;
