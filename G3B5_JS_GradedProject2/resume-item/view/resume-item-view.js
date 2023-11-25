import { resumeItem } from "../model/resume-item.js";

class JobItemView {
  constructor() {
    this.itemNumber = 0;
  }
  /* Function creates various sections required for showing the resume div names are set up the same as the JSON parent level object */

  displayResumeDetails(allJobItems) {
    this.parentObject = document.getElementById("personal");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "personalSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["personal"]);

    this.parentObject = document.getElementById("education");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "educationSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["education"]);

    this.parentObject = document.getElementById("work");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "workSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["work"]);

    this.parentObject = document.getElementById("projects");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "projectsSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["projects"]);

    this.parentObject = document.getElementById("Internship");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "InternshipSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["internship"]);

    this.parentObject = document.getElementById("achievements");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "achievementsSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["achievements"]);

    this.parentObject = document.getElementById("basics");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "basicsSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["basics"]);

    this.parentObject = document.getElementById("skills");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "skillsSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["skills"]);

    this.parentObject = document.getElementById("interests");
    this.object = document.createElement("div");
    this.object.setAttribute("id", "interestsSection");
    this.parentObject.appendChild(this.object);
    this.buildResume(allJobItems[this.itemNumber]["interests"]);
  }

  /* Reads the resume JSON object and dynamically builds the sub sections
    Dynamic in the sense if there as an additional information in Interests say other than hobby if we expand the object the below piece of code will automatically taken care
*/
  buildResume(jsonObj) {
    for (let jsonLoop in jsonObj) {
      if (!!jsonObj[jsonLoop] && typeof jsonObj[jsonLoop] == "object") {
        const element = document.createElement("p");
        element.innerHTML = `        <u><b>${jsonLoop} </b></u>`;
        this.object.appendChild(element);
        this.buildResume(jsonObj[jsonLoop]);
      } else {
        if (jsonObj[jsonLoop] !== null) {
          if (jsonObj[jsonLoop].length != undefined && /^\d+$/.test(jsonLoop)) {
            const element = document.createElement("p");
            element.innerHTML = `${jsonObj[jsonLoop]}`;
            this.object.appendChild(element);
          } else {
            const element = document.createElement("p");
            console.log(typeof jsonObj[jsonLoop]);
            element.innerHTML = `        <b> ${jsonLoop} </b>: ${jsonObj[jsonLoop]}`;
            this.object.appendChild(element);
          }
        }
      }
    }
  }

  /* Function controls determine if previous button has to be enabled or not it will get the prev button object and totalcount */

  displayPrevButton(prevBtn, totalCount) {
    prevBtn.disabled = true;
    if (this.itemNumber > 0 && this.itemNumber <= totalCount - 1) {
      prevBtn.disabled = false;
    }
  }

  /* Function controls determine if next button has to be enabled or not it will get the next button object and totalcount */

  displayNextButton(nextBtn, totalCount) {
    nextBtn.disabled = true;
    if (this.itemNumber >= 0 && this.itemNumber < totalCount - 1) {
      nextBtn.disabled = false;
    }
  }

  /* Resume area is reset to have it ready for other search results to render */
  resetResume() {
    if (document.getElementById("personalSection")) {
      document.getElementById("personalSection").remove();
      document.getElementById("educationSection").remove();
      document.getElementById("workSection").remove();
      document.getElementById("projectsSection").remove();
      document.getElementById("InternshipSection").remove();
      document.getElementById("achievementsSection").remove();
      document.getElementById("basicsSection").remove();
      document.getElementById("skillsSection").remove();
      document.getElementById("interestsSection").remove();
    }
  }

  resetContainer(error) {
    if (!error) {
      document.getElementById("header-area").style.display = "block";
      document.getElementById("detailsarea").style.display = "block";
      document.getElementById("errorarea").style.display = "none";
      document.getElementById("resetBtn").disabled = false;
    } else {
      document.getElementById("header-area").style.display = "none";
      document.getElementById("detailsarea").style.display = "none";
      document.getElementById("errorarea").style.display = "block";
      document.getElementById("resetBtn").disabled = true;
      document.getElementById("prevBtn").disabled = true;
      document.getElementById("nextBtn").disabled = true;
    }
  }

  resetResumeCounter() {
    this.itemNumber = 0;
  }

  /* Increase/decrease the array result when prev/next button is clicked */
  clickPrevButton() {
    this.itemNumber--;
  }

  clickNextButton() {
    this.itemNumber++;
  }
}

export { JobItemView };
