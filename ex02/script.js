const title = document.getElementById("title");
const note = document.querySelector(".note");
const box = document.querySelector("#box");

title.textContent = "The DOM Changed This";
note.textContent = "Updated with textContent";

title.style.color = "tomato";
note.style.fontStyle = "italic";

box.classList.add("active");