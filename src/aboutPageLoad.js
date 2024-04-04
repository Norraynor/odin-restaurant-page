
function aboutPageLoad() {
	const element = document.createElement("div");
	const h1Name = document.createElement("h1");
	h1Name.textContent = "About Us";
	h1Name.classList.add("about");
    element.appendChild(h1Name);
    const container = document.createElement('div');
    container.classList.add('about-container');        
    const owner = createCard("Owner", "Giusseppi", "Mastermind","Greatest pizza chef that ever lived. Orders his minions around to create best pizza that could exist. It is said that one day he may even finish a pizza");
    container.appendChild(owner);
    const manager = createCard('Manager', 'Giusseppi Jr', 'Minion', 'Tries to be like his father');
    container.appendChild(manager);
    const employee = createCard('Employee', 'Giusseppi(clone)', 'Minion', 'Created after greatest mastermind - has all the best qualities but not as refined');
    container.appendChild(employee);
    element.appendChild(container);
	return element;
}

function createCard(title,name,role,description) {
    const card = document.createElement("div");
    card.classList.add("card");

    const h4title = document.createElement("h4");
    h4title.textContent = `${title}`;
    h4title.classList.add(`${title.toLowerCase()}`);
    card.appendChild(h4title);
    const h5Name = document.createElement("h5");
    h5Name.textContent = `${name} - ${role}`;
    h5Name.classList.add("name");
    card.appendChild(h5Name);
    const para = document.createElement("p");
    para.classList.add("description");
    para.textContent =`${description}`

    card.appendChild(para);

    return card;
}

export default aboutPageLoad;
