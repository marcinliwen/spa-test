window.addEventListener("load", function () {
  function switchTab(tab_content) {
    var x = document.getElementsByClassName("tabcontent");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    if (tab_content != null && document.getElementById(tab_content)) {
      document.getElementById(tab_content).style.display = "block";
    }
    var scrollToThis = document.querySelector("#spa-packages");
    scrollToThis.scrollIntoView((alignToTop = true));
  }
  var fromTop = document.querySelector("#spa-packages").offsetTop + 400;
  var toSpaMenu = document.querySelector(".tospamenu");
  var doc = document.documentElement;

  var tabMenu = document.querySelectorAll(".spa-element-link a");

  for (i = 0; i <= tabMenu.length; i++) {}
  tabMenu.forEach(function (elem) {
    elem.addEventListener("click", function () {
      switchTab(elem.getAttribute("data-target"));
    });
  });
  document.addEventListener("scroll", function (e) {
    e.stopPropagation();
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > fromTop + 120) {
      toSpaMenu.classList.add("visible");
    } else {
      toSpaMenu.classList.remove("visible");
    }
  });
  var spaMenu = document.querySelector(".spa-menu-list");
  var spaMenuTop = spaMenu.offsetTop - spaMenu.scrollTop + spaMenu.clientTop;
  toSpaMenu.addEventListener("click", function (e) {
    document.scrollingElement.scrollTop = spaMenuTop;
  });
});
