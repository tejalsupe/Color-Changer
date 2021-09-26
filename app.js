const colors=["yellow","pink","limegreen ","red","darkblue"];
const btn= document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click',()=>{
    const random = getRandomNumber();
    console.log(random);

    document.body.style.backgroundColor=colors[random];
    color.textContent=colors[random]
});

getRandomNumber = ()=>{
    return Math.floor(Math.random() * colors.length);
   

}