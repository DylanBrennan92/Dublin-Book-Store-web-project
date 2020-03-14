function scroll() {
//Buidling a nav bar which will scroll with the user on
//the new releases.html page
	var nav = document.getElementById("fixednav");
	var sticky = nav.offsetTop;

  if (window.pageYOffset >= sticky) {
    nav.classList.add("fixednav")
  } else {
    nav.classList.remove("fixednav");
  }
}
