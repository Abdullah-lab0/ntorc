 let title =document.querySelector('.title');
 let ul =document.querySelector('ul');
 let reload =document.querySelector('.reload');
 window.onload=function(){
if(window.nevigatior.online){
online()
}else{
    ofline()
 }
 }
 window.addEventListener("online",function(){
online();
 });
function online(){
title.innerHTML=' online';
title.style.color='green';
ul.classList.add('hide');
reload.classList.add('hide');

}
function ofline(){
title.innerHTML=' ofline';
title.style.color=' rgb(109, 102, 102);';
}