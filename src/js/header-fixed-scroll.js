window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var header = document.getElementById("fixedHeader");

  var sticky = header.offsetTop;
  console.log("page offset ", window.pageYOffset, "sticky ", sticky);
  if (window.pageYOffset > 60) {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
}
