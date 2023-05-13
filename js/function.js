

      // variables
      let itemB = document.getElementById('itemB'),
      menuLogo = document.getElementById('menuLogo'),
       backGroundChange = document.getElementById('backGroundChange'),
       backGround = document.getElementById('backGround'),
      menuContent = document.getElementById('menuContent'),
       itemBOne = document.getElementById('itemBOne'),
       itemBTwo = document.getElementById('itemBTwo'),
       itemBChild = document.getElementById('itemBChild'),
       itemBOneChild = document.getElementById('itemBOneChild'),
       itemBTwoChild = document.getElementById('itemBTwoChild');



// @media queries

menuLogo.onclick = () => {
  
    menuContent.style.visibility = "visible"
menuContent.style.transform = "translate(100px)"
menuContent.style.transitionDuration = "0.4s";
backGroundChange.style.display = "block"
menuClose.style.marginLeft= "-20px"
}

menuClose.onclick = () =>{
    menuContent.style.visibility = "hidden"
menuContent.style.transform = "translate(600px)"
backGroundChange.style.display = "none"
}


