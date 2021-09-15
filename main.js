import {handleClick} from './modules/HandleUserEvents/handleClick.js'
import {handleInputChange} from './modules/HandleUserEvents/handleInputChange.js';

export let userEvents = [];

document.addEventListener('click', handleClick);
const inputs = Array.from(document.getElementsByTagName('input'));

inputs.forEach((input) => {
    input.addEventListener('change', handleInputChange);
});


