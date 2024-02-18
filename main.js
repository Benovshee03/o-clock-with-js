// var today = new Date()
// var date = today.getFullYear()
// date = today.getMinutes()

// console.log(date);

let clock = document.querySelector(".clock")
let second = document.querySelector(".second")
let minute = document.querySelector(".minute")
let hour = document.querySelector(".hour")
// clock.addEventListener("keydown" , ()=>{
//     currentDate = new Date()

//     let newsecond = currentDate.getSeconds()/60
//     let newminute = currentDate.getMinutes()/60
//     let newhour = currentDate.getHours()/12



//     // let date = currentDate.getFullYear()
//     console.log(newhour)
// })


setInterval(() => {
    currentDate = new Date()

    let newsecond = currentDate.getSeconds()/60
    let newminute = currentDate.getMinutes()/60
    let newhour = currentDate.getHours()/12
    if(newminute === "1"){
        second.classList.add("newsecond")
    }else if()




    console.log(currentDate);
    console.log(newsecond);
    console.log(newminute);
    console.log(newhour);
}, 1000);












// setInterval( function setClock(){
//     let currentDate = new Date()
//     let newsecond = currentDate.getSeconds()/60
//     let newminute = currentDate.getMinutes()/60
//     let newhour = currentDate.getHours()/12
//     setRotation(second,newsecond)
//     setRotation(minute,newminute)
//     setRotation(hour,newhour)
// },1000);
// function setRotation(e,rotation){
//     e.style.setProperty(`--rotation` , rotation*360)
// }

// setClock()


// var hourStick = document.querySelector('[data-hour-stick]')
// var minuteStick =document.querySelector('[data-minute-stick]')
// var secondStick =document.querySelector('[data-second-stick]')
// setInterval( function setClock () {
//     var currentDate = new Date()
//     var seconds = currentDate.getSeconds()/60
//     var minutes = (seconds+currentDate.getMinutes())/60
//     var hours = (minutes+currentDate.getHours())/12
//     setRota(secondStick,seconds)
//     setRota(minuteStick,minutes)
//     setRota(hourStick,hours)
// }, 1000);
// function setRota(element,rotations){
// element.style.setProperty(`--rotation`,rotations*360)
// }
// setClock()



// sehife acilan kimi bashlasin  firlanmaga 


