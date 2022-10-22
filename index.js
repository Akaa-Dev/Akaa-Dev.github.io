const projectSection = document.getElementById("projectsPanel");
const projects = [];
class Project {
  constructor(name) {
    this.name = name;
    this.image = "";
    this.link = `https://akaa-dev.github.io/${name}`;
    this.description = "";
  }
  addImage(image) {
    // takes images path/url as parameter
    if (typeof image == "string") {
      this.image = image;
    } else {
      console.log(typeof image);
      throw "image path or url should be a string";
    }
  }
}
const train = new Project("Train");
train.addImage("images/train.png");
train.description =
  "Train was made completely with Java. It is a colorful graphic design of a train station that conceptualizes Java fundamentals and state design pattern.";

const mathGame = new Project("Math-Game");
mathGame.addImage("images/maths_game.png");
mathGame.description =
  "Maths game is an exciting game that tests one 's knowledge of simple multiplication.";

const calculator = new Project("Calculator");
calculator.addImage("images/calculator_b.png");
calculator.description =
  "You can use this calcualtor to daily calculations like additon, substraction, multiplication, division. Additionally, you can track the history of your calculation using the history button.";

projects.push(train, mathGame, calculator);

const makeProjectCardbody = (project) => {
  const projText = document.createElement("div");
  projText.classList.add("card-body", "dark");
  projText.innerHTML = `<h5 class="card-title">${project.name}</h5><p class="card-text">${project.description}</p>`;
  return projText;
};

const makeProjectFull = (project) => {
  const projText = makeProjectCardbody(project);
  const projImage = document.createElement("img");
  projImage.classList.add("img-thumbnail", "card-img-top", "image-size");
  projImage.src = `${project.image}`;
  const projBtn = makeBtnGroup(project);
  const projectWrapper = document.createElement("div");
  projectWrapper.classList.add("card", "cardSize");
  projectWrapper.append(projImage, projText, projBtn);
  return projectWrapper;
};

const makeBtnGroup = (project) => {
  const projBtns = document.createElement("div");
  const pageLinkBtn = document.createElement("button");
  const gitLinkBtn = document.createElement("button");
  const pageLink = document.createElement("a");
  const gitLink = document.createElement("a");
  projBtns.className = "btn-group";
  pageLink.href = `${project.link}`;
  pageLink.innerText = "Go to Project";
  gitLink.href = `https://github.com/Akaa-Dev/${project.name}`;
  gitLink.innerText = "See code on Github";
  pageLinkBtn.classList.add("btn", "proBtn");
  gitLinkBtn.classList.add("btn", "btn-success");
  pageLinkBtn.appendChild(pageLink);
  gitLinkBtn.appendChild(gitLink);
  projBtns.append(pageLinkBtn, gitLinkBtn);
  return projBtns;
};

const addProject = (project) => {
  const projectCover = document.createElement("div");
  projectCover.classList.add("col", "col-sm-4", "mb-4");
  const projectcard = makeProjectFull(project);
  projectCover.appendChild(projectcard);
  projectSection.appendChild(projectCover);
};

for (let index = 0; index < projects.length; index++) {
  const project = projects[index];
  addProject(project);
}
