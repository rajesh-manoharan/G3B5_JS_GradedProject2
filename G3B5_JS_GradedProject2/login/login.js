import { UserInformationManager } from "./usermanagement.js";

let userInformationManager = new UserInformationManager("G3B5", "G3B5");
userInformationManager.initializeUserInformation();

/**
 * This function is responsible to navigate to resume page using location object.
 */
var navigateToResumeWindow = () => {
  let origin = window.location.origin;
  window.location.replace(origin.concat("/resume.html"));
};

/**
 * This method is responsible to show error message when user login fails.
 */
var showErrorMessage = () => {
  document.getElementById("error-msg").style.display = "block";
};

class LoginController {
  constructor() {}

  /**
   * This method is responsible to assign event listener to login form and disable default behaviour.
   * It also collects given username and password and validates the same.
   */
  initializeEventListener() {
    document
      .getElementById("login-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // You can add your login validation logic here
        if (
          userInformationManager.validateUserInformation(username, password)
        ) {
          window.sessionStorage.setItem("username", username);
          navigateToResumeWindow();
          // You can redirect to another page or perform other actions here.
        } else {
          showErrorMessage();
        }
      });
    console.log("LoginController has been initialized.");
  }
}

let loginController = new LoginController();
loginController.initializeEventListener();