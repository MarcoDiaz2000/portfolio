const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mainmenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelectorAll('.menu-link').forEach((n) => {
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

const projects = [
  {
    title: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/p1.png',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  {
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/p2.png',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },

  {
    title: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/p3.png',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  {
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/p4.png',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
];

const portfolio = document.querySelector('#portfolio');

for (let i = 0; i < projects.length; i += 1) {
  portfolio.innerHTML += `
    <div class='hero'>
    <div class='col1'>
      <img class='img-hero' src='${projects[i].image}' alt='image-project' />
    </div>
    <div class='col2'>
      <h2 class='title2'>${projects[i].title}</h2>
      <div class='type'>
        <span class='texttype'>CANOPY</span>
        <img src='images/dot.png' alt='dot' />
        <span class='texttype2'>Back End Dev</span>
        <img src='images/dot.png' alt='dot' />
        <span class='texttype2'>2015</span>
      </div>
      <p class='text1'>
      ${projects[i].description}
      </p>
      <div class='wbtn'>
        <ul class='wbtn1'>
          <li class='wbtn3'>${projects[i].html}</li>
          <li class='wbtn3'>${projects[i].css}</li>
          <li class='wbtn3'>${projects[i].javascript}</li>
        </ul>
      </div>
      <button class='btn'>See project</button>
    </div>
  </div>
  `;
}

function displayProject(project) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 class="h2-modal">${project.title}</h2>
      <div class="type type-modal">
        <span class="texttype">CANOPY</span>
        <img src="images/dot.png" alt="dot" />
        <span class="texttype2">Back End Dev</span>
        <img src="images/dot.png" alt="dot" />
        <span class="texttype2">2015</span>
      </div>
        <div class="img-div-modal">
      <img class="img-hero" src="${project.image}" alt="image-project" />
        </div>
      <div class="project-info">
        <div class="column1">
          <div class="description">
            <p class="text1-modal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div class="column2">
          <div class="buttons">
            <ul class="wbtn1">
              <li class="wbtn3">${project.html}</li>
              <li class="wbtn3">${project.css}</li>
              <li class="wbtn3">${project.javascript}</li>
            </ul>
            <hr>
            <div class="button-container">
              <button class="btn-modal">See sive<img class="icon" src="images/iconlive.png" alt="github" /></button>
              <button class="btn-modal">See source<img class="icon" src="images/icongithub.png" alt="github" /></button>
            </div>
          </div>
        </div>
      </div>
      <div><p>.</p></div>
    </div>
  `;

  const closeButton = modal.querySelector('.close');
  closeButton.addEventListener('click', () => {
    modal.remove();
  });

  document.body.appendChild(modal);
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    displayProject(projects[index]);
  });
});

const form = document.getElementById('form-portfolio');
const email = form.elements.user_email;
const errorMessage = document.getElementById('error-message-form');

form.addEventListener('submit', (event) => {
  const emailAddress = email.value;

  if (emailAddress !== emailAddress.toLowerCase()) {
    errorMessage.textContent = 'The message was not sent, please put the email address in lowercase. Thank you.';
    event.preventDefault();
  }
});
