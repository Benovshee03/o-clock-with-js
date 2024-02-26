function setClock() {
  var today = new Date();
  let second = document.querySelector(".second");
  let minute = document.querySelector(".minute");
  let hour = document.querySelector(".hour");

  let newsecond = (today.getSeconds() / 60)*360;
  let newminute = (today.getMinutes() / 60) * 360;
  let newhour = (today.getHours() % 12) * 30 + (today.getMinutes() / 60) * 30;

  minute.style.transform = `rotate(${newminute}deg) translateY(-50%)`; 
   second.style.transform = `rotate(${newsecond}deg) translateY(-50%)`;
   hour.style.transform = `rotate(${newhour}deg) translateY(-50%)`;
}
setInterval(setClock,1000)


