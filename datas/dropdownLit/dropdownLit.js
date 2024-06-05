import { html, render } from "lit-html";
const dropdownHTML = await import("./dropdown.html");

const helloTemplate = (name) => html`${dropdownHTML}`;
