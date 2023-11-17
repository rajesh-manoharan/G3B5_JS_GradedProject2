/**
 * This Java Script file is responsible to initialize all resume page related JS code.
 */
import { ResumeAppController } from './controller/resume-app-controller.js'

const resumeAppController = new ResumeAppController();
resumeAppController.init();
resumeAppController.checkUserLoginStatus();