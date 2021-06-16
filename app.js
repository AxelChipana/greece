// Menu
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

// menu
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}
closeBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}
// DETENER SCROLL AL ABRIR NAVBAR
menuBtn.addEventListener("click", () => {
  document.body.style.overflow="hidden";
  })
  closeBtn.addEventListener("click", () => {
  document.body.style.overflow="initial";
  })

// STICKY NAVBAR
$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('#navbar').addClass('black');
  }
  else {
    $('#navbar').removeClass('black');
  }
})