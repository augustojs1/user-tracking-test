import {handleClick} from './modules/HandleUserEvents/handleClick.js'
import {handleInputChange} from './modules/HandleUserEvents/handleInputChange.js';

export let userEvents = [];


//Record Button
const record = document.querySelector('.record-btn');

let recording = false;
const handleRecord = (event) => {

    const inputs = Array.from(document.getElementsByTagName('input'));

    if (!recording) {
        record.innerText = 'Stop';
        recording = true;

        inputs.forEach((input) => {
            input.addEventListener('change', handleInputChange);
        });

        document.addEventListener('click', handleClick);

    } else {
        record.innerText = 'Record';
        recording = false;

        document.removeEventListener('click', handleClick);
        inputs.forEach((input) => {
            input.removeEventListener('change', handleInputChange);
        });
      
        console.log({ userevents: userEvents });
        console.log(JSON.stringify({ userevents: userEvents }));
    }

    console.log('Gravandooo!');
}

record.addEventListener('click', handleRecord);
