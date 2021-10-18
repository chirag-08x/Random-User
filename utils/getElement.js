function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`No such selector "${selection}"" exist`);
}

export default getElement;
