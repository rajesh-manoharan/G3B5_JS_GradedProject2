import { resumeItem } from "../model/resume-item.js";

class JobItemView {

    constructor() {
        this.itemNumber = 0;
    }

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

    buildResume(jsonObj) {
        for (let jsonLoop in jsonObj) {
            if (!!jsonObj[jsonLoop] && typeof (jsonObj[jsonLoop]) == "object") {
                const element = document.createElement("p");
                element.innerHTML = `        <u><b>${jsonLoop} </b></u>`;
                this.object.appendChild(element);
                this.buildResume(jsonObj[jsonLoop]);
            }
            else {
                if (jsonObj[jsonLoop] !== null) {
                    const element = document.createElement("p");
                    element.innerHTML = `        <b> ${jsonLoop} </b>: ${jsonObj[jsonLoop]}`;
                    this.object.appendChild(element);
                }
            }
        }
    }

    displayPrevButton(prevBtn, totalCount) {
        prevBtn.disabled = true;
        if (this.itemNumber > 0 && this.itemNumber <= (totalCount - 1)) {
            prevBtn.disabled = false;
        }
    }

    displayNextButton(nextBtn, totalCount) {
        nextBtn.disabled = true
        if (this.itemNumber >= 0 && this.itemNumber < (totalCount - 1)) {
            nextBtn.disabled = false;
        }
    }

    resetResume() {
        if (document.getElementById('personalSection')) {
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
            document.getElementById("header-area").style.display='block';
            document.getElementById("detailsarea").style.display='block';
            document.getElementById("errorarea").style.display='none';
            document.getElementById("resetBtn").disabled=false;
        } else {
            document.getElementById("header-area").style.display='none';
            document.getElementById("detailsarea").style.display='none';
            document.getElementById("errorarea").style.display='block';
            document.getElementById("resetBtn").disabled=true;
            document.getElementById('prevBtn').disabled=true;
            document.getElementById('nextBtn').disabled=true;
        }
    }

    resetResumeCounter() {
        this.itemNumber = 0;
    }


    clickPrevButton() {
        this.itemNumber--;
        console.log('Prev button function', this.itemNumber);
    };

    clickNextButton() {
        this.itemNumber++;
        console.log('Next button function', this.itemNumber);
    }

}

export { JobItemView };