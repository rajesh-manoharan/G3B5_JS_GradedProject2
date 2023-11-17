class UserInformationManager {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    initializeUserInformation() {
        this.clearUserInformation();
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
    }
    validateUserInformation(username, password) {
        if (localStorage.getItem("username") !== undefined &&
            localStorage.getItem("password") !== undefined) {
            return (username === localStorage.getItem("username") &&
                password === localStorage.getItem("password"));
        }
        return false;
    }
    clearUserInformation() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
}

export { UserInformationManager };