const btnE1=document.querySelector(".btn");
btnE1.addEventListener("mouseover", (Event)=>{
    const x = (Event.pageX-btnE1.offsetLeft); 
    const y = (Event.pageY-btnE1.offsetTop); 

    btnE1.style.setProperty("--xPos",x + "px");
    btnE1.style.setProperty("--yPos", y+ "px");
});