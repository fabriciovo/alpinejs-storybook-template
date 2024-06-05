export default function DropdownData() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;
    },
  };
}
