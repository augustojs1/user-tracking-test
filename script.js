let userEvents = [];
let userInputChange = [];

const handleClick = ({ type, target }) => {
    userEvents.push({ type, target });
    // console.log(userEvents);
}

const handleKey = ({ type, target, key }) => {
    let keyValues = [];

    userEvents.push({type, target, key});
}

const handleKeyUp = (event) => {
    userInputChange.push({ target: event.target, type: event.type, value: event.target.value });
    console.log(userInputChange);
}

document.addEventListener("click", handleClick);
// document.addEventListener("keypress", handleKey);
// const nome = document.querySelectorAll('.input');

const inputs = Array.from(document.getElementsByTagName('input'));
console.log(inputs);

inputs.forEach((input) => {
    input.addEventListener('change', handleKeyUp);
});


// nomes.forEach((nome) => {
//     nome.addEventListener('change', handleKeyUp);
// });


