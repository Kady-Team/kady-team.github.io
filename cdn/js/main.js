function openNavbarDropDown(){
  document.querySelector(".nav-mobile").classList.add("show");
  document.querySelector("#mobile_nav_selector").classList.add("hide");
}

function closeNavbarDropDown(){
  document.querySelector(".nav-mobile").classList.remove("show");
  document.querySelector("#mobile_nav_selector").classList.remove("hide");
}





function openPage(page){
  Array.from(document.querySelectorAll(".page"))
    .map((e) => e.classList.contains("home") ? null : e.setAttribute("hidden", true));

  const elm = document.querySelector(`.page.${page}`);
  elm.removeAttribute("hidden");
}

function closePage(){
  Array.from(document.querySelectorAll(".page"))
    .map((e) => e.classList.contains("home") ? null : e.setAttribute("hidden", true));
}

document.addEventListener("keydown", function(k){
  if (k && (k.key == "Escape"))
    closePage();
});

window.onload = function(){
  // Open page
  let query = new URLSearchParams(window.location.search);
  query.forEach(function(v, k){
    switch(k){
      case "page": {
        openPage(v);
        query.delete("page");
        window.history.replaceState(null, null, query.href || document.location.pathname);
        break;
      }
    }
  });
  
};