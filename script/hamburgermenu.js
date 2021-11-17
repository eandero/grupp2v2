//used to keep track of the state of the hamburger menu (open or not)
var menustate = true;


function toggleHamburger() {

  var element = document.getElementById("buttonicon");

  //IF:TRUE- removes the original navbar icon class and ads an image tag in the same element with the X icon.
  //ELSE: - adds the navbar-toggler-icon class again and removes the <img> element with the X i
  if(menustate){
    element.classList.remove("navbar-toggler-icon");
    element.innerHTML = '<img class="closeicon" src="https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png">';
    menustate = false;
  } else {
    element.innerHTML = "";
    element.classList.add("navbar-toggler-icon");
    menustate = true;
  }

}
var myButton = document.getElementById("hamburgerbutton");

//Event that triggers the function above when the hamburgermenu is clicked
myButton.addEventListener("click", toggleHamburger);
