class Storage {

    static getUsers() {
        let users;
        if(localStorage.getItem("users") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("users"))
        }
        return users;
    }

    static storeUser(user) {
        const users = Storage.getUsers();
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }
}