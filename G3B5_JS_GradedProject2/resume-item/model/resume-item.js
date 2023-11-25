class resumeItem {
  constructor(
    id,
    basics,
    personal,
    skills,
    work,
    internship,
    projects,
    education,
    achievements,
    interests
  ) {
    this.id = id;
    this.personal = personal;
    this.basics = basics;
    this.skills = skills;
    this.work = work;
    this.internship = internship;
    this.projects = projects;
    this.education = education;
    this.achievements = achievements;
    this.interests = interests;
  }
}

export { resumeItem };
