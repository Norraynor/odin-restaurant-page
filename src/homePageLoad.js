import PizzaImage from "./pizza-1024x1024.jpg";
function homePageLoad() {
	const element = document.createElement("div");
	const h1Name = document.createElement("h1");
	h1Name.textContent = "Mamma Mia! Pizzeria!";
	h1Name.classList.add("name");
	element.appendChild(h1Name);
	const imagePizza = new Image();
	imagePizza.src = PizzaImage;
	imagePizza.alt = "pizza image";
	element.appendChild(imagePizza);
	const h4Description = document.createElement("h4");
	h4Description.textContent = "Pizza so good it hurts";
	h4Description.classList.add("description");
	element.appendChild(h4Description);

	return element;
}

export default homePageLoad;
