import aboutPageLoad from './aboutPageLoad';
import homePageLoad from './homePageLoad';
import menuPageLoad from './menuPageLoad';
import './style.css'

const content = document.querySelector("#content");
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

(function component() {
    content.appendChild(homePageLoad());
    homeButton.addEventListener('click', () => {
        content.textContent = '';
        content.appendChild(homePageLoad());
    })
    menuButton.addEventListener('click', () => {
        content.textContent = '';
        content.appendChild(menuPageLoad());
    })
    aboutButton.addEventListener("click", () => {
        content.textContent = '';
        content.appendChild(aboutPageLoad());
    });
})()
