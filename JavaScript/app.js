document.getElementById("btn1").addEventListener("click", function() {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".bg-modal").style.display = "none";
});

document.getElementById("btn2").addEventListener("click", function() {
  document.querySelector(".bg-modal-2").style.display = "flex";
});

document.querySelector(".close2").addEventListener("click", function() {
  document.querySelector(".bg-modal-2").style.display = "none";
});
