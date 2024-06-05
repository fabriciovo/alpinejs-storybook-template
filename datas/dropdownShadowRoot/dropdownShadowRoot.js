import Alpine from "alpinejs";

class DropdownData extends HTMLElement {
  constructor() {
    super();
    this.open = false;

    this.attachShadow({ mode: "open" });

    Alpine.data("dropdown", () => ({
      open: this.open,
      toggle: this.toogle,
    }));
  }

  toogle() {
    this.open = !this.open;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <div x-data="dropdown">
    <button @click="toggle">Toggle</button>
    <div x-show="open">open</div>
    </div>
    `;

    Alpine.initTree(this.shadowRoot);
  }
}

customElements.define("dropdown-element", DropdownData);
