/*
1. css파일을 추가하지 않는 방법.
2. css파일을 이용한 방법.
*/
const body = document.querySelector("body");

function firstColorSet(){
  const firstWidth = window.innerwidth;
  if (firstWidth < 300){
    body.style.backgroundColor = "skyblue";
  }
  else if(firstWidth >= 300 && width < 500){
    body.style.backgroundColor = "purple";
  }
  else if(firstWidth >= 500){
    body.style.backgroundColor = "yellow";
  }
}
firstColorSet();

function changeColor(){
  const width = window.innerWidth;
  if (width < 300){
    body.style.backgroundColor = "skyblue";
  }
  else if(width >= 300 && width < 800){
    body.style.backgroundColor = "purple";
  }
  else if(width >= 800){
    body.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", changeColor);





