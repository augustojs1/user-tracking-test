import { userEvents } from "../../main.js";

export const handleInputChange = (event) => {
    userEvents.push({ target: event.target, type: event.type, value: event.target.value });
    console.log(userEvents.forEach(({ value }) => console.log(value)));
    
}


