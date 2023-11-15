import { JobCategory } from '../job-category/model/job-category.js';
import { JobCategoryUtils } from '../job-category/model/job-category-utility.js'
import { JobItemView } from "../resume-item/view/resume-item-view.js";
import { NoJobItemView } from '../resume-item/view/no-resume-view.js'

class ResumeAppView {
    constructor() {
        this.prevBtn = document.getElementById("prevBtn");
        this.searchBox = document.getElementById("searchbox");
        this.nextBtn = document.getElementById("nextBtn");
        this.resetBtn = document.getElementById("resetBtn");
        this.jobItemView = new JobItemView();
        this.noJobItemView = new NoJobItemView();
        this.allJobItems = null;
        this.allJobItemsarray = new Array();
    }

    displayAllResume() {
        const allJobCategories = JobCategoryUtils.getAllJobCategories();

        allJobCategories.forEach((jobCategory) => {
            this.allJobItems = JobCategoryUtils.getAllJobItems(jobCategory);
            this.allJobItemsarray = [...this.allJobItems, ...this.allJobItemsarray];
        })
        this.allJobItems = [...this.allJobItemsarray];

        if (this.allJobItems.length === 0) {
            const error=true;
            this.jobItemView.resetContainer(error);
            this.noJobItemView.resetForError();
        } else {
            this.render();
        }
    }

    render() {
        this.jobItemView.resetContainer();
        this.jobItemView.displayResumeDetails(this.allJobItems);
        this.jobItemView.displayPrevButton(this.prevBtn, this.allJobItems.length);
        this.jobItemView.displayNextButton(this.nextBtn, this.allJobItems.length);
    }

    displaySearchResume() {

        this.searchBox.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                this.jobItemView.resetResume();
                this.jobItemView.resetResumeCounter();
                const inputJobCategory = new JobCategory(this.searchBox.value);
                this.allJobItems = JobCategoryUtils.getAllJobItems(inputJobCategory);

                if (this.allJobItems.length === 0) {
                    const error=true;
                    this.jobItemView.resetContainer(error);
                    this.noJobItemView.resetForError();
                } else {
                    this.searchBox.disabled = true;
                    this.render();
                }
            }
        })

        this.prevBtn.addEventListener("click", (event) => {
            this.jobItemView.clickPrevButton();
            this.jobItemView.resetResume();
            this.render();
        })

        this.nextBtn.addEventListener("click", (event) => {
            this.jobItemView.clickNextButton();
            this.jobItemView.resetResume();
            this.render();
        })

        this.resetBtn.addEventListener("click", (event) => {
            this.jobItemView.resetResumeCounter();
            this.jobItemView.resetResume();
            this.render();
            this.searchBox.disabled = false;
            this.searchBox.value = '';
        })
    }
}
export { ResumeAppView };