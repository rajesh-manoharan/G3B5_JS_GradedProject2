class UserInformationManager {
  /**
   * Constructor of this class.
   * @param {*} username  Given Username string.
   * @param {*} password Given Password string.
   */
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /**
   * This method is responsible to initialize local storage with predefined username and password.
   */
  initializeUserInformation() {
    this.clearUserInformation();
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
  }

  /**
   * This method is responsible to validate username and password provided by user during login.
   *
   * @param {*} username  Given username.
   * @param {*} password Given password.
   * @returns return true if validation passed otherwise false.
   */
  validateUserInformation(username, password) {
    if (
      localStorage.getItem("username") !== undefined &&
      localStorage.getItem("password") !== undefined
    ) {
      return (
        username === localStorage.getItem("username") &&
        password === localStorage.getItem("password")
      );
    }
    return false;
  }

  /**
   * This method is responsible to remove username and password from local storage.
   */
  clearUserInformation() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
}

export { UserInformationManager };