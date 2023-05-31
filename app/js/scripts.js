// var mapClicker = document.querySelector(".map");
// var body = document.querySelector("body"); // NEW

// mapClicker.addEventListener("click", show);

// function show(e) {
//   body.classList.toggle("showme"); // NEW
//   e.preventDefault();
// }

// document.addEventListener("click", show);

// // function show(e) {
// //   console.log(e.target);
// //   // 'event.target' is the clicked element
// //   e.preventDefault();
// // }


// document.addEventListener("click", handleClicks);
// var body = document.querySelector("body");

// function handleClicks(e) {
//   if (e.target.matches(".map")) {
//     body.classList.add("showme");
//     e.preventDefault();
//   } else {
//     body.classList.remove("showme");
//   }
// }

var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    body.classList.toggle("showme");
    e.preventDefault();
  } else {
    body.classList.remove("showme");
  }
}