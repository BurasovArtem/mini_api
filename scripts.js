const base  = "http://numbersapi.com/";
const start = 1;
const end   = 100;

window.onload = () => {
	for (let i=start; i<=end; i++) {
		fetch(base + i + '/trivia')
			.then(response => response.text())
	        	.then(data => {
	        		createItem(i, data);
	        	})
	}		
}

function createItem(number, text) {
	let main = document.getElementById('main'),
		item = document.createElement('div'),
		title = document.createElement('div'),
		description = document.createElement('div');
	main.appendChild(item);
	item.appendChild(title);
	item.appendChild(description);
	item.classList.add('item');
	title.innerText = number;
	title.classList.add('title');
	description.innerText = text;
	description.classList.add('description');
}