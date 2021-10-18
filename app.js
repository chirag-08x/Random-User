import get from "./utils/getElement.js";
import displayUser from "./utils/displayUser.js";

const btn = get(".random-btn");

btn.addEventListener("click", async () => {
  try {
    await displayUser();
  } catch (error) {
    console.log(error);
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  try {
    await displayUser();
  } catch (error) {
    console.log(error);
  }
});
