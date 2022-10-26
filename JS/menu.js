
let menuButton = document.getElementById('menuButton') 
function menuFuncions() {
  let cont = ""
  cont += "<div id='Omenu'>"
  cont += "<img class='menuIcon' src='/img/menu.svg' alt=''>"
  cont += "</div>"
  cont += "<div class='menu' id='menu'>"

  cont += "<div class='menuContainer'>"
  cont += "<span id='CMenu'><img class='menuIcon' src='/img/menu.svg' alt=''></span>"
  cont += "<div class='img'><img src='' alt=''></div>"
  cont += "<h1>Nombre de perfil</h1>"
  cont += "<h2>Configurar</h2> "
  cont += "<a href='/index.html'><h2 class='Cerrar'>Cerrar sesion</h2></a>"
  cont += "</div> "
  cont += "</div>"
  menuButton.innerHTML = cont
}
menuFuncions()
let Omenu = document.getElementById("Omenu");
let menu = document.getElementById("menu");
let Cmenu = document.getElementById("CMenu");
let sizeMenu = "25";
let sizeWindows = window.innerWidth;

if (sizeWindows < 900) {
  sizeMenu = "100"
}

document.addEventListener("resize", function () {
  sizeWindows = Number(window.innerWidth);
  if (sizeWindows < 1000) {
    sizeMenu = "100"
  }
})

Omenu.addEventListener('click', function () {
  menu.style.transition = '.5s';
  menu.style.left = '0px';
  menu.style.width = sizeMenu + "%";
  Omenu.style.marginRight = '20px';
})

Cmenu.addEventListener('click', function () {
  menu.style.transition = '.5s';
  menu.style.left = -sizeMenu + "%";
  Omenu.style.display = "inline-block";
})
