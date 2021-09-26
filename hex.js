const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn= document.getElementById("btn");
const color = document.querySelector('.color');
// #f10253
btn.addEventListener('click',()=>{
    let hexColor ="#";
    for (let index = 0; index < 6; index++) {
        hexColor +=hex[getRandomNumber()]
        
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

getRandomNumber = ()=>{
    return Math.floor(Math.random() * hex.length);
   

}
