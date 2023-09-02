var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    document.querySelector(".footer").style.bottom = "0";
  } else {
    document.querySelector("header").style.top = "0";
    document.querySelector(".footer").style.bottom = "-98px";
  }
  prevScrollpos = currentScrollPos;
}

function hideMapButton() {
  var mapButton = document.querySelector('.map');
  mapButton.style.display = 'none';
}

// Set a timer to call the hideMapButton function after 8 seconds
setTimeout(hideMapButton, 8000);