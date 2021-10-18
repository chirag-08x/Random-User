import get from "./getElement.js";
import fetchData from "./fetchData.js";
import removeActive from "./removeActive.js";

async function displayUser() {
  const image = get(".user-img");
  const userName = get(".user-name");
  const btns = [...document.querySelectorAll(".btn")];
  removeActive(btns);
  btns[0].classList.add("active");
  const data = await fetchData();
  console.log(data);
  image.src = data.large;
  userName.innerText = data.name;
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const dataKey = e.currentTarget.dataset.id;
      userName.innerText = data[dataKey];
      removeActive(btns);
      e.currentTarget.classList.add("active");
    });
  });
}
export default displayUser;
