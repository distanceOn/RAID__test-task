import { request } from "./request.js";

request({
  path: "data",
  onSuccess: (data) => {
    console.log(data);
    for (const item of data) {
      renderList(item);
    }
  },
});

function renderList(item) {
  const list = document.querySelector(".main__list");
  const li = document.createElement("li");
  li.classList.add("list__item");
  const a = document.createElement("a");
  a.classList.add("list__a");
  a.textContent = item;
  a.setAttribute("href", `../single.html?s=${item.toLowerCase()}`);
  li.append(a);
  list.append(li);
}
