function renderStatus(status) {
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
export {};
//# sourceMappingURL=index.js.map