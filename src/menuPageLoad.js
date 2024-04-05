import margherita from './margheritapizza.jpg'
import pineapple from './pineapplepizza.jpg'

function menuPageLoad() {
	const element = document.createElement("div");
	const h1Name = document.createElement("h1");
    h1Name.textContent = "Menu";
	h1Name.classList.add("menu");
	element.appendChild(h1Name);
	const container = document.createElement("div");
	container.classList.add("menu-container");
	const pineapplePizza = createCard(
		"PineapplePizza",
		pineapple,
		"Some love it and some hate it."
	);
	container.appendChild(pineapplePizza);
	const margheritaPizza = createCard(
        "MargheritaPizza",
        margherita,
		"Simple and lovable pizza"
	);
	container.appendChild(margheritaPizza);	
    
	element.appendChild(container);
	return element;
}

function createCard(title, image, description) {
	const card = document.createElement("div");
	card.classList.add("card");

	const h4title = document.createElement("h4");
	h4title.textContent = `${title}`;
	h4title.classList.add(`${title.toLowerCase()}`);
    card.appendChild(h4title);
	const foodImage = new Image();
	foodImage.src = image;
	foodImage.alt = `${title} image`;
	foodImage.classList.add('menu-image');
	card.appendChild(foodImage);
	const para = document.createElement("p");
	para.classList.add("description");
	para.textContent = `${description}`;

	card.appendChild(para);

	return card;
}

export default menuPageLoad;
