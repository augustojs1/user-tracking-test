import { userEvents } from "../../main.js";

export const handleClick = ({ type, target }) => {
    userEvents.push({ type, target });
    console.log(userEvents);

}