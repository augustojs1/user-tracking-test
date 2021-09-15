let userEvents = [];

const handleClick = ({ type, target }) => {
    userEvents.push({ type, target });
    // console.log(userEvents);
}

const handleKey = ({ type, target, key }) => {
    let keyValues = [];

    userEvents.push(type, target, key);
}

const handleKeyUp = (event) => {
    console.log(event);
}

document.addEventListener("click", handleClick);
document.addEventListener("keypress", handleKey);
const nome = document.querySelector('#input-nome');
console.log(nome);
nome.addEventListener('change', handleKeyUp);


