const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer"
];

let i = 0;
const typing = document.getElementById("typing");

function changeRole() {
  typing.textContent = roles[i];
  i = (i + 1) % roles.length;
}

changeRole();
setInterval(changeRole, 2000);

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();