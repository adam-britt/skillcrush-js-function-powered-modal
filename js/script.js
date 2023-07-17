var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

function openModal() {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
}

function closeModal() {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
}

button.addEventListener("click", function () {
  openModal();
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function(e) {
  console.log(e.key);
  if(e.key === 'Escape') {
    if(modal.classList.contains(".show-modal")) {
      closeModal();
    }
  }
});