import { JobCategoryUtils } from "./job-category-utility.js";
import { JobCategory } from "./job-category.js";
import { JobItemView } from "../../resume-item/view/resume-item-view.js"

// function testgetAllJobCategories() {

//     const allJobCategories = JobCategoryUtils.getAllJobCategories();

//     console.log("Length is " + allJobCategories.length);
//     console.log(allJobCategories);
// }

class TestClass {
    testGetAllJobItemsBasedOnJobCategory() {
        const managerJobCategory = new JobCategory("HR");
        const allJobItems = JobCategoryUtils.getAllJobItems(managerJobCategory);

        var jobItemView = new JobItemView("personal");
        jobItemView.buildResume(allJobItems[0]["personal"]);

        var jobItemView = new JobItemView("education");
        jobItemView.buildResume(allJobItems[0]["education"]);

        jobItemView = new JobItemView("work");
        jobItemView.buildResume(allJobItems[0]["work"]);

        jobItemView = new JobItemView("projects");
        jobItemView.buildResume(allJobItems[0]["projects"]);

        jobItemView = new JobItemView("Internship");
        jobItemView.buildResume(allJobItems[0]["internship"]);

        jobItemView = new JobItemView("achievements");
        jobItemView.buildResume(allJobItems[0]["achievements"]);

        jobItemView = new JobItemView("basics");
        jobItemView.buildResume(allJobItems[0]["basics"]);

        jobItemView = new JobItemView("skills");
        jobItemView.buildResume(allJobItems[0]["skills"]);

        jobItemView = new JobItemView("interests");
        jobItemView.buildResume(allJobItems[0]["interests"]);
    }
}

export { TestClass };