
// let butt=document.querySelector(".button");
// const changeColor=(event)=>{
//     let myHeax="0123456789abcdef"
//     let color="#";
//     let num=Math.round(Math.random());
//     for(let i=0; i<=5; i++){
//     color=color+myHeax[Math.floor(Math.random()*16)]
//     }
//     console.log(color)
//     document.body.style.backgroundImage=" linear-gradient(to right, #000 #444)"
// }
// butt.addEventListener("click",changeColor)

let butt = document.querySelector(".button");

const changeColor = (event) => {
    let myHex = "0123456789abcdef";

    function getRandomColor() {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += myHex[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let color1 = getRandomColor();
    let color2 = getRandomColor();

    console.log(color1, color2);
    
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;

};

butt.addEventListener("click", changeColor);



let butt2=document.querySelector(".button2");


const changeColor1 = (event) => {
    let myHex = "0123456789abcdef";

    function getRandomColor() {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += myHex[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let color11 = getRandomColor();
    let color22 = getRandomColor();

    console.log(color11, color22);

    document.body.style.backgroundImage = `linear-gradient(to right, ${color11}, ${color22})`;
}
butt2.addEventListener("click",changeColor1)

let para=document.querySelector(".para");
const copyCode=(event)=>{
   
}
para.addEventListener("click",copyCode)
