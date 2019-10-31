const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

//fullname

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
