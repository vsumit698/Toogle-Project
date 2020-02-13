var toggleBar = document.getElementsByClassName('toggle-bar')[0];
var circle = document.getElementsByClassName('circle')[0];
var toggleText = document.getElementsByClassName('toggle-text')[0];
var body = document.getElementsByTagName('body')[0];
var click = 0;
function changeMode(){
  if(click%2==0){
    circle.style.left = "75%";
    toggleBar.style.borderColor = "white";
    toggleText.style.color = "white";
    body.style.backgroundColor = "black";
  }else{
    circle.style.left = "0px";
    toggleBar.style.borderColor = "black";
    toggleText.style.color = "black";
    body.style.backgroundColor = "white";
  }
  click++;
}
toggleBar.addEventListener("click",changeMode);
