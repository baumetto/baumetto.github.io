let pageToLoad = "home";

function checkPageToLoad(pageName) {
  pageToLoad = pageName.split("#")[0];
  console.log("Page to load:", pageToLoad);
  if(pageToLoad !== "home") {
    return `../sections/home/components/${pageToLoad}/${pageToLoad}.html`
  }
  return `../sections/home/home.html`
};

fetch("../sections/navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

function loadPage(pageName) {

  fetch(checkPageToLoad(pageName))
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("home").innerHTML = data;
    
    const hash = pageName.split("#")[1];
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

loadPage(pageToLoad);