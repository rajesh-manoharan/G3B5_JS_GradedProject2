import { UserInformationManager } from "./usermanagement.js";

let userInformationManager = new UserInformationManager("G3B5", 'G3B5');
userInformationManager.initializeUserInformation();


var navigateToResumeWindow = () => {
    let origin = window.location.origin;
    window.location.replace(origin.concat('/resume.html'));
}

var showErrorMessage = () => {
    document.getElementById("error-msg").style.display = 'block';
}

class LoginController {
    initializeEventListener() {
        document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            // You can add your login validation logic here
            if (userInformationManager.validateUserInformation(username, password)) {
                navigateToResumeWindow();
                // You can redirect to another page or perform other actions here.
            } else {
                showErrorMessage();
            }
        });
    }
}

let loginController = new LoginController();
loginController.initializeEventListener();