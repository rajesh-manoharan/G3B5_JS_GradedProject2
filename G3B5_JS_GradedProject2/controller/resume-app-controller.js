import { ResumeAppView } from "../view/resume-app-view.js";
class ResumeAppController {

    init() {
        const resumeAppView = new ResumeAppView();
        resumeAppView.displayAllResume();
        resumeAppView.displaySearchResume();
    }

    checkUserLoginStatus() {
        var loggedInUsername = window.sessionStorage.getItem("username");
        if (loggedInUsername === null) {
            console.log("As there is no user logged in we are redirecting to Login Screen.")
            let origin = window.location.origin;
            window.location.replace(origin.concat('/index.html'));
        }
    }

}

export { ResumeAppController };