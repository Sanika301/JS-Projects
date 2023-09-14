let current='home';
let currenticon='icon-h';
let activeIcon=document.getElementById(currenticon);
activeIcon.classList.add("active-icon");
let activeStage=document.getElementById(current);
// activeStage.classList.remove("inactive");
activeStage.classList.add("active");
function changeState(id)
{
    let nextState=document.getElementById(id);
    console.log(nextState);
    activeStage.classList.remove('active');
    activeStage=nextState;
    activeStage.classList.add('active');
}
function changeStage(id){
    let nextStage=document.getElementById(id);
    activeIcon.classList.remove("active-icon");
    nextStage.classList.add("active-icon");
    activeIcon=nextStage;
}
