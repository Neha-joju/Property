function ham(){
   let menu = document.getElementById("hamburger");
   if(menu.style.display === "none")
   {
    menu.style.display = "block";
   }
   else{
    menu.style.display = "none";
   }
}