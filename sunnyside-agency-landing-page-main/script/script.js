let menuBtn= document.querySelector("#hbMenu")
let closeMenu= document.querySelector("#closeMenu")
let menuWindow= document.querySelector("#menoMobileJs")

menuBtn.addEventListener("click", menuChange)
closeMenu.addEventListener("click", menuClose)

function menuChange(){
  menuBtn.classList.remove("menuMobile")
  closeMenu.classList.remove("closingMenu")
  menuWindow.classList.remove("menuPopUpContainerOff")
  menuBtn.classList.add("meunuMobileOff")
  closeMenu.classList.add("closingMenuOn")
  menuWindow.classList.add("menuPopUpContainerOn")
}

function menuClose(){
    menuBtn.classList.remove("meunuMobileOff")
    closeMenu.classList.remove("closingMenuOn")
    menuWindow.classList.remove("menuPopUpContainerOn")
    menuBtn.classList.add("menuMobile")
    closeMenu.classList.add("closingMenu")
    menuWindow.classList.add("menuPopUpContainerOff")

}
