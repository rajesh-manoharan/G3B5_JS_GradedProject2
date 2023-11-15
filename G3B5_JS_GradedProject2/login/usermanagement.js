class UserInformationManager {

    constructor(username, password) {
        this.username = username;
        this.password = password;
        console.log("Instance of UserInformationManager has been created.");
    }

    initializeUserInformation() {
        this.clearUserInformation();
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
        console.log("Username and password have been intialized in local storage.")
    }

    validateUserInformation(username, password) {
        console.log(`Currently stored username : ${localStorage.getItem("username")} and password : ${localStorage.getItem("password")}`)
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