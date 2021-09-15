import { userEvents } from "../../main.js";

export const handleInputChange = ({ target, type }) => {
    userEvents.push({ target: { tag: target.localName, class: target.className, id: target.id }, type, value: target.value });

    console.log(userEvents);
}


