document.addEventListener('DOMContentLoaded', addScrollListeners);

function scroll(sectionId){
   const sectionToScroll =  document.getElementById(sectionId);
   const menuHeight = document.getElementById("navbar").offsetHeight;
   const sectionPosition = sectionToScroll.offsetTop - menuHeight;
   scrollTo(0,sectionPosition);
}

function addScrollListeners(){
document.getElementById("homeBtn").addEventListener("click", ()=>scroll("home"));
document.getElementById("aboutBtn").addEventListener("click", ()=>scroll("about"));
document.getElementById("projectBtn").addEventListener("click", ()=>scroll("project"));
document.getElementById("contactBtn").addEventListener("click", ()=>scroll("contact"));
}