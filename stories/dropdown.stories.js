import "../datas/dropdown/dropdown.js";

export default {
  title: "Datas/Dropdown",
  argTypes: {
    open: {
      name: "Opened",
      control: "boolean",
    },
  },
  args: {
    open: false,
  },
};

const Template = (args) => {
  return `
    <dropdown-element> </dropdown-element>
  `;
};

export const Modal = Template.bind({});
