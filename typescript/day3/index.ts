type Status = "idle" | "loading" | "success" | "error";

function renderStatus(status: Status) {
	switch (status) {
		case "idle":
			return "Start";

		case "loading":
			return "Loading...";

		case "success":
			return "Done!";

		case "error":
			return "Something went wrong";
	}
}

console.log(renderStatus("idle"));
console.log(renderStatus("loading"));
console.log(renderStatus("success"));
console.log(renderStatus("error"));
