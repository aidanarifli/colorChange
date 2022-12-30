const body = document.querySelector("body");
const button = document.querySelector("button");
const colors=["#48f542","black","#42f5f2","#f54248","yellow","pink","#dd42f5","green"];


button.addEventListener("click", changeBackground);
let sira = 0;
function changeBackground(){
    //random reng
    // const randomReng = Math.floor(Math.random()* colors.length);
    
    // const secilenReng = colors[randomReng];
    // console.log(randomReng, secilenReng);
    // body.style.backgroundColor = secilenReng;

    //sira ile reng
    if(sira == 7) sira = 0;
    const secilenReng = colors[sira];
    sira++;
    body.style.backgroundColor = secilenReng;
}