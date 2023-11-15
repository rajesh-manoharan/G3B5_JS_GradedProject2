import { ResumeAppView } from "../view/resume-app-view.js";
class ResumeAppController {

    init() {
        const resumeAppView = new ResumeAppView();
        resumeAppView.displayAllResume();
        resumeAppView.displaySearchResume();
    }

}

export { ResumeAppController };