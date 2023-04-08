
       window.onresize = screen
     window.onload = screen
function screen() {
  myWidth = window.innerWidth;
        if(myWidth <= 600){
menuClose.style.transform = "translate(122px)"

        }
        else if (myWidth += 10){
       menuClose.style.transform = "translate(149px)"
        }
          else if (myWidth -= 10){
       menuClose.style.transform = "translate(133px)"
        }
            else if((myWidth >= 601)&&(myWidth <= 900)){
menuClose.style.transform = "translate(182px)"
        }
      }
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


    /*  item-b ul first child functions  */
      itemB.onclick = () =>{
      // first item functions onclick
       itemBChild.style.display ="block";
        itemB.style.height = "43px";
        // second item functions onclick of the first text
          itemBOne.style.height = "25px";
        itemBOneChild.style.display ="none";
         // Third item functions onclick of the first text
     itemBTwo.style.height = "0px";
      itemBTwoChild.style.display ="none";
     }

    
      itemBOne.onclick = () =>{
          // first item functions onclick of the second text
      itemB.style.height = "10px";
      itemB.style.paddingBottom = "15px";
       itemBChild.style.display ="none";
         // second item functions onclick 
       itemBOne.style.height = "35px";
       itemBOneChild.style.display ="block";
           // Third item functions onclick of the second text
         itemBTwo.style.height = "0px";
          itemBTwoChild.style.display ="none";
      
     }
     
     itemBTwo.onclick = () =>{
      // first item functions onclick of the third text
      itemBChild.style.display ="none";
       itemB.style.paddingBottom = "15px";
      itemB.style.height = "10px";
      // second item functions onclick of the third text
       itemBOneChild.style.display ="none";
      itemBOne.style.height = "25px";
      // Third item functions onclick of the second text
        itemBTwoChild.style.display ="block";
       itemBTwo.style.height = "38px";
     }
// @media queries

menuLogo.onclick = () => {
    menuContent.style.visibility = "visible"
menuContent.style.transform = "translate(250px)"
menuContent.style.transitionDuration = "0.4s";
backGroundChange.style.display = "block"
menuClose.style.marginLeft= "-20px"
}

menuClose.onclick = () =>{
    menuContent.style.visibility = "hidden"
menuContent.style.transform = "translate(600px)"
backGroundChange.style.display = "none"
}


