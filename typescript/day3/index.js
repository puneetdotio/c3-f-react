function handleStatus(status) {
    if (status === "loading") {
        console.log("Loading...");
    }
    if (status === "success") {
        console.log("Success");
    }
    if (status === "error") {
        console.log("Something went wrong....");
    }
}
handleStatus("loading");
handleStatus("success");
handleStatus("error");
export {};
//# sourceMappingURL=index.js.map