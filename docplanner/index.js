const like = document.querySelectorAll(".far");
let trashIcon = document.querySelectorAll(".trash");

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (like[i].style.color == "red") {
      like[i].style.color = "white";
    } else {
      like[i].style.color = "red";
    }
  });
}
for (let i = 0; i < trashIcon.length; i++) {
  trashIcon[i].addEventListener("click", function () {
    trashIcon[i].parentElement.remove();
    total();
  });
}
