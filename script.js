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
    title: 'To.do list',
    description:
      '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    description2:
      '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete',
    image: 'images/To-do list.jpg',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    seeLive: 'https://marcodiaz2000.github.io/To-do-list/dist/',
    seeSource: 'https://github.com/MarcoDiaz2000/To-do-list',
  },
  {
    title: 'Harley Davidson Book an Appointment',
    description:
      'The project we built is based on an app to book an appointment to test ride a Harley-Davidson motorcycle.',
    description2:
      '"Harley Davidson Book an Appointment" The project we built is based on an app to book an appointment to test ride a Harley-Davidson motorcycle.',
    image: 'images/p2.png',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    seeLive: '#',
    seeSource: '#',
  },

  {
    title: 'Micro Biz Finder',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2:
      'The application was created with React and Redux, using the Yelp fuction API. Develop the application for a geolocated micro directory, where tourists and residents can easily search for services and entertainment in the city of Montreal, QC, Canada. The application is designed so that you can easily create local directories for other cities.',
    image: 'images/p3.png',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    seeLive: '#',
    seeSource: '#',
  },
  {
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2:
      '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. You will build a simple website that allows for doing that, and you will do it using ES6 and Webpack!',
    image: 'images/p4.png',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    seeLive: '#',
    seeSource: '#',
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
        <span class='texttype2'>2023</span>
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
        <span class="texttype2">2023</span>
      </div>
        <div class="img-div-modal">
      <img class="img-hero" src="${project.image}" alt="image-project" />
        </div>
      <div class="project-info">
        <div class="column1">
          <div class="description">
            <p class="text1-modal">${project.description2}</p>
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
            <a href="${project.seeLive}" target="_blank"> <button class="btn-modal">See live<img class="icon" src="images/iconlive.png" alt="github" /></button>  </a> 
            <a href="${project.seeSource}" target="_blank"> <button class="btn-modal">See source<img class="icon" src="images/icongithub.png" alt="github" /></button> </a> 
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

const formData = document.getElementById('form-portfolio');

formData.addEventListener('submit', (eventData) => {
  eventData.preventDefault();

  const nameData = formData.elements.user_name.value;
  const emailData = formData.elements.user_email.value;
  const messageData = formData.elements.user_message.value;

  localStorage.setItem('form_data', JSON.stringify({ nameData, emailData, messageData }));

  formData.submit();
});

const storedData = JSON.parse(localStorage.getItem('form_data'));

if (storedData) {
  formData.elements.user_name.value = storedData.nameData;
  formData.elements.user_email.value = storedData.emailData;
  formData.elements.user_message.value = storedData.messageData;
}
