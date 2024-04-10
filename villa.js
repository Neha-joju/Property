function ham(){
    let menu = document.getElementById("hamburger");
    if(menu.style.display === "flex")
    {
     menu.style.display = "none";
    }
    else{
     menu.style.display = "flex";
    }
 }