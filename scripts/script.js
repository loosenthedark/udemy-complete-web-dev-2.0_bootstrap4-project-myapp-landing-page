window.addEventListener("scroll", function () {
  if (document.body.scrollTop === 0) {
    var homeLink = document.getElementById('home-link');
    //user is at the top of the page;
    homeLink.style.color('rgba(0,0,0,.9)');
  }
});