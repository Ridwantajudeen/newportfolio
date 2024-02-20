const textElement = document.getElementById('typing-text');
const textToType = "Hello, My name is Ridwan Tajudeen.\nI am a Knowledgeable Front End Web Developer adept at creating successful websites\nthat meet User's needs.  produce plans and improve designs for usability and functionality.";
let charIndex = 0;

function type() {
    const text = textToType.slice(0, ++charIndex);
    textElement.textContent = text;
    if (charIndex < textToType.length) {
        setTimeout(type, 70);
    }
}

window.onload = function () {
    type();
    showPage('page1'); // Display 'Projects' content by default
};

function showPage(pageId) {
    const contentContainer = document.getElementById('content-container');
    let content;

    if (pageId === 'page1') {
        content = `
        <div class="card">
          <h2>Projects</h2>
         
          <ul>
            <li><div >
            <h1>Fintech App</h1>
            <image id="pro-img" src="images/fintech.png"/><br>
            <a id="pro-a" href="https://fintech-app-8y8f.vercel.app/">View Project</a>
            </div>
            </li>
            <li>
            <div>
            <h1>A To-Do list App</h1>
            <image id="pro-img" src="images/todo.png"/><br>
            <a id="pro-a" href="https://ridwantajudeen.github.io/to-do-list/">View Project</a>
            </div>
            </li>
            <li>
            <div>
            <h1>Salon Page</h1>
            <image id="pro-img" src="images/emrald.png"/><br>
            <a id="pro-a" href="https://fintech-app-8y8f.vercel.app/">View Project</a>
            </div>
            </li>
            <li>
            <div>
            <h1>Weather App</h1>
            <image id="pro-img" src="images/weather.jpg"/><br>
            <a id="pro-a" href="https://ridwantajudeen.github.io/weather-app/">View Project</a>
            </div>
            </li>
          </ul>
        </div>`;
    } else if (pageId === 'page2') {
        content = `
        <div id="skills-card" class="card">
          <h2 class="skills-heading">Skills</h2>
          <div class="skills-list">
          <p > <span id="the-bold"> Front End Web Development - </span> </br>I specialize in creating interactive and visually appealing websites.</p>
          <p> <span id="the-bold"> Web Design - </span> </br> Crafting beautiful and user-friendly interfaces is my passion.</p>
          <p> <span id="the-bold"> Web Optimization - </span> </br> Ensuring websites load fast and perform efficiently for an optimal user experience.</p>
          <p> <span id="the-bold"> Code Debugging - </span> </br> Skilled in identifying and resolving issues to maintain error-free code.</p>
          <p> <span id="the-bold"> Git - </span> </br> Proficient in version control to collaborate seamlessly with teams.</p>
          <p> <span id="the-bold"> Team Management - </span> </br> Effective coordination and leadership in a collaborative environment.</p>
          </div>
        </div>`;
    } else if (pageId === 'page3') {
        content = `
        <div class="card" id="card1">
          <h2>Contact me on:</h2>
          <p id="card-p"> <a id="card-a" href="https://github.com/Ridwantajudeen"><div id="card-p"><image src="images/github.png"/><h1 class="card-p">GitHub</h1></div</a></p>
          <p id="card-p"> <a id="card-a" href="mailto:ridwantajudeen8@gmail.com"><div id="card-p"><image src="images/email.png"/><h1 class="card-p">Email</h1></div</a></p>
          <p id="card-p"> <a id="card-a" href="tel:+2348163422787"><div id="card-p"><image src="images/phone.png"/><h1 class="card-p">+2348163422787</h1></div</a></p>
          <p id="card-p"> <a id="card-a" href="https://twitter.com/Ritajtimi"><div id="card-p"><image src="images/twitter.png"/><h1 class="card-p">@ritajtimi</h1></div</a></p>
          <p id="card-p"> <a id="card-a" href="https://www.linkedin.com/in/ridwan-tajudeen/"><div id="card-p"><image src="images/linkedin.png"/><h1 class="card-p">Ridwan Tajudeen</h1></div</a></p>
          
        </div>`;
    }

    contentContainer.innerHTML = content;
}

document.getElementById('hireButton').addEventListener('click', function () {
  var email = 'ridwantajudeen8@gmail.com';
  var subject = encodeURIComponent('Subject: Job Opportunity');
  var body = encodeURIComponent('Hello,\n\nI am interested in discussing job opportunities with you. Please let me know the details.\n\nBest regards,\n[Your Name]');

  var mailtoLink = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  window.location.href = mailtoLink;
});

console.log("me&u")
// make it show each city's local time instead