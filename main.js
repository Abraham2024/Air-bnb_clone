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
