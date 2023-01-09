// (()=>{
//     const config ={
//         dotMinRed:6,
//         dotMaxRed:20,
//         massFactor:0.002,
//         defcolor: `rgba(250, 10, 30, 0.9)`,
//     }
//     const TWO_PI = 2 * Math.PI
//     const canvas =document.querySelector("canvas")
//     const ctx =canvas.getContext("2d")
//     let w,h,mouse,dots;

//     class Dot {
//         constructor(){
//             this.pos  = {x:mouse.x , y: mouse.y}
//             this.vel  = {x: 0, y: 0}
//             this.rad  = random(config.dotMinRed, config.dotMaxRed)
//             this.mass  =this.rad * config.massFactor
//             this.color  = config.defcolor
//         }
        
//         draw(){
//             createCircle(this.pos.x, this.rad,true,this.color)
//             createCircle(this.pos.x, this.rad,false,config.defcolor)
//         }
//     }

//     function createCircle(x, y, rad, fill, color) {
//        ctx.fillStyle = ctx.strokeStyle = color 
//        ctx.beginPath()
//        ctx.arc(x, y, rad, 0, TWO_PI)
//        ctx.closePath()
//        fill ? ctx.fill() : ctx.stroke()
//     }

// function random(min,max) {
//     return Math.random() * (max - min) + min
// }
// createCircle()
// random()
//     function init() {
//         w     = canvas.width = innerWidth
//         h     = canvas.height = innerHeight
//         mouse = {x: w / 2, y: h / 2, down:false}
//         dots =[]
       

//     }

//  function loop() {
//     ctx.clearRect(0, 0, w, h)
//     if(mouse.down){dots.push(new Dot());}
//     dots.foreach(e => e.draw())

//     window.requestAnimationFrame(loop())
//  }

//     init()
//     loop()

//     function setPos({LayerX,LayerY}){
// [mouse.x, mouse.y] =[LayerX,LayerY]

//     }


//     function isDown(){
//         mouse.down = !mouse.down
//     }

// canvas.addEventListener(`mousemove`,setPos());
// window.addEventListener(`mousedown`, isDown())
// window.addEventListener(`mouseup`, isDown())

// })();

const elCanvas =document.querySelector('canvas')
    const ctx =elCanvas.getContext("2d")
const div =document.querySelector(".box")

elCanvas.width =window.innerWidth
elCanvas.height =window.innerHeight

// function canvasFunc(evt) {
//     var x =50

//     let X = evt.screenX
//     let Y = evt.screenY
//     ctx.fillStyle = "magenta"
//     // ctx.fillRect(50, 50, 300, 200)
//   let setIn =  setInterval (()=>{
//     ctx.fillRect(X,Y,30,20)
// },1)
// ctx.clearRect(0,0,X,Y)
// // ctx.arc(X,Y,50,20,20)
// }

// console.dir(elCanvas);
function myFunc(evt) {
    let X = evt.screenX
    let Y = evt.screenY
     const eldiv =document.createElement('button')
     eldiv.setAttribute("class","eldiv")
     eldiv.style.left =`${X}px`
     eldiv.style.top =`${Y}px`
     const colors =["red","blue","yellow","white","ornge"]
     const random =Math.floor(Math.random()* Math.floor(colors.length))
    //  console.log(colors[random]);
     eldiv.style.backgroundColor =colors[random]
     setInterval(()=>{

         eldiv.remove()
    },1000)
    const random2 =Math.floor(Math.random() * (60 - 40) + 40);
  
    //  eldiv.style.width =`${random2}px`
    //  eldiv.style.height =`${22}px`
     div.appendChild(eldiv)
     console.log(eldiv.style.width);
}
elCanvas.addEventListener("mousemove",evt =>{
    console.log("Bismillah");
myFunc(evt)
// canvasFunc(evt)
console.log(evt);
    
})