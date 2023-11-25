import { resumeJson } from "../../resume-item/model/resume-item-data.js";
import { resumeItem } from "../../resume-item/model/resume-item.js";
import { JobCategory } from "./job-category.js";

class JobCategoryUtils {
  static getAllJobItems(jobCategory) {
    const resumeJSONinner = resumeJson.resume;

    const allJobItems = new Array();

    resumeJSONinner.forEach((jobItemSampleData) => {
      const {
        basics: { AppliedFor },
      } = jobItemSampleData;

      if (jobCategory.category === AppliedFor) {
        const resumeItemObj = new resumeItem(
          jobItemSampleData.id,
          jobItemSampleData.basics,
          jobItemSampleData.personal,
          jobItemSampleData.skills,
          jobItemSampleData.work,
          jobItemSampleData.Internship,
          jobItemSampleData.projects,
          jobItemSampleData.education,
          jobItemSampleData.achievements,
          jobItemSampleData.interests
        );
        allJobItems.push(resumeItemObj);
      }
    });

    return allJobItems;
  }

  static getAllJobCategories() {
    const allJobCategories = new Array();

    allJobCategories.push(new JobCategory("Software Engineer"));
    allJobCategories.push(new JobCategory("Manager"));
    allJobCategories.push(new JobCategory("HR"));
    return allJobCategories;
  }
}

export { JobCategoryUtils };
