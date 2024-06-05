// Import the HTML template for the counter
import counterTemplate from "./counter-template.html";

// Define the custom element
class MyCounter extends HTMLElement {
  constructor() {
    super();

    // Attach shadow DOM
    this.attachShadow({ mode: "open" });

    // Clone the template content and append it to shadow DOM
    const template = document.createElement("template");
    template.innerHTML = counterTemplate;
    const templateContent = template.content.cloneNode(true);
    this.shadowRoot.appendChild(templateContent);

    // Initialize count
    this.count = 0;

    // Bind event listeners
    this.shadowRoot
      .getElementById("increment")
      .addEventListener("click", this.increment.bind(this));
    this.shadowRoot
      .getElementById("decrement")
      .addEventListener("click", this.decrement.bind(this));
  }

  increment() {
    this.count++;
    this.updateCount();
  }

  decrement() {
    this.count--;
    this.updateCount();
  }

  updateCount() {
    this.shadowRoot.getElementById("count").innerText = this.count;
  } 

  // Define observed attributes if needed
  static get observedAttributes() {
    return ["count"];
  }

  // Handle attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "count" && oldValue !== newValue) {
      this.count = parseInt(newValue);
      this.updateCount();
    }
  }

  // Define the default value for the count attribute
  connectedCallback() {
    if (!this.hasAttribute("count")) {
      this.setAttribute("count", 0);
    }
  }
}

// Define the custom element
customElements.define("my-counter", MyCounter);
