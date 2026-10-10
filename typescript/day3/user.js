const users = [];
export function addUser(user) {
    users.push(user);
}
export function getUser(id) {
    const user = users.find((u) => u.id === id);
    if (user) {
        return user;
    }
    else {
        return "User not found";
    }
}
//# sourceMappingURL=user.js.map