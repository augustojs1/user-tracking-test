import { userEvents } from "../../main.js";

export const handleClick = ({ type, target }) => {
    userEvents.push({ URL: target.baseURI, target: { tag: target.localName, class: target.className, id: target.id }, type });

    console.log(userEvents);
}