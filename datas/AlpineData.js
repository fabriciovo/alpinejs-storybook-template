import Alpine from "alpinejs";
/**
 * A generic component class for use in scalable apps with AlpineJS.
 */
export default class AlpineData {
  /**
   * Creates an instance of GenericComponent.
   * @param {String} componentName - The Name of Alpine Component Data
   * @param {Object.<string, any>} props - The properties object.
   */
  constructor(componentName, props) {
    this.componentName = componentName;
    /**
     * A test property.
     * @type {string}
     */
    this.test = "";

    /**
     * Another test property.
     * @type {number}
     */
    this.test2 = 20;

    /**
     * The props object containing test and test2 properties.
     * @type {Object.<string, any>}
     */
    this.props = { ...props, test: this.test, test2: this.test2 };

    this.createAlpineData();
  }

  init() {
    alert("asdasd");
  }

  /**
   * Prints the value of the test2 property.
   * @returns {void}
   */
  printMyTest2() {
    console.log(this.test2);
  }

  /**
   * Sets the value of the test property.
   * @param {string} string - The value to set for the test property.
   * @returns {void}
   */
  setMyTest(string) {
    this.test = string;
    console.log(this.test);
  }

  /**
   * Creates an AlpineJS data object.
   * @returns {void}
   */
  createAlpineData() {
    Alpine.data(this.componentName, () => ({
      ...this.props,
      printMyTest2: this.printMyTest2,
      setMyTest: this.setMyTest,
      init: this.init,
    }));
  }
}
