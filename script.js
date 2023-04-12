const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mainmenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  })
);

const projects = [
  {
    title: "Tonic",
    devs: ["CANOPY • Back End Dev • 2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/p1.png",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
  },
  {
    title: "Multi-Post Stories",
    devs: ["CANOPY • Back End Dev • 2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/p2.png",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
  },

  {
    title: "Tonic",
    devs: ["CANOPY • Back End Dev • 2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/p3.png",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
  },
  {
    title: "Multi-Post Stories",
    devs: ["CANOPY • Back End Dev • 2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "images/p4.png",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
  },
];

const portfolio = document.querySelector("#portfolio");
for (let i = 0; i < projects.length; i += 1) {
  portfolio.innerHTML += `
    <div class="hero">
    <div class="col1">
      <img class="img-hero" src="${projects[i].image}" alt="image-project" />
    </div>
    <div class="col2">
      <h2 class="title2">${projects[i].title}</h2>
      <div class="type">
        <span class="texttype">CANOPY</span>
        <img src="images/dot.png" alt="dot" />
        <span class="texttype2">Back End Dev</span>
        <img src="images/dot.png" alt="dot" />
        <span class="texttype2">2015</span>
      </div>
      <p class="text1">
      ${projects[i].description}
      </p>
      <div class="wbtn">
        <ul class="wbtn1">
          <li class="wbtn3">${projects[i].html}</li>
          <li class="wbtn3">${projects[i].css}</li>
          <li class="wbtn3">${projects[i].javascript}</li>
        </ul>
      </div>
      <button id="btnnum${i}" class="btn">See project</button>
    </div>
  </div>
  `;
}
