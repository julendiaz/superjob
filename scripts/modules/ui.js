export default class UI {
  static displayJobs() {
    //Get data from local storage
    const jobs = [
      {
        company: "Blizzard",
        position: "Tech Lead",
        location: "San Francisco",
        superjob: true,
        stage: "wish-list",
      },
      {
        company: "Ubisoft",
        position: "Game Developer",
        location: "San Francisco",
        superjob: false,
        stage: "wish-list",
      },
    ];

    //Add jobs to stage
    jobs.forEach((job) => UI.addJobToStage(job));
  }

  static addJobToStage(job) {
    //Select the stage to add the job
    const stage = document.querySelector(`[data-stage="${job.stage}"]`);

    //Create card element with Job data
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("draggable", "true");
    card.innerHTML = `
    <div class="card__left-wrapper">
      <div class="circular-img circular-img--no-img">${job.company[0]}</div>
          <div class="left-wrapper__company-content">
          <h3 class="card__company-title">${job.company}</h3>
          <h3 class="card__position-title">${job.position}</h3>
      </div>
    </div>
    <div class="card__right-wrapper">
      <input type="checkbox" class="supercheck" name="supercheck" checked="${job.superjob}">
      <span class="tag">${job.location}</span>                        
    </div> 
    `;

    //Append card as the first child of the stage
    stage.insertAdjacentElement("afterbegin", card);
  }

  static deleteJob() {}

  static showAlert() {}

  static clearInputs() {
    document.querySelector("#company").value = "";
    document.querySelector("#position").value = "";
    document.querySelector("#location").value = "";
    document.querySelectorAll("#super").checked = false;
  }
}