import React from "react";

const UserCard = ({user}) => {

	return (
		<div>
			<div>
				{/* <img src={} alt="" /> */}
            </div>
            <div>
                <h1>{user.name }</h1>
                <p>{ user.email}</p>
            </div>
		</div>
	);
};

export default UserCard;
