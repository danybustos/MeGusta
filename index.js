//Linn

let linnBtn = document.getElementById("linnBtn");
let nLikes1 = document.getElementById("nLikes1");
let like1 = 0;

linnBtn.onclick = ()=>{
    like1++;
    nLikes1.textContent = like1 + " " + "like(s)";
}

//Lina

let linaBtn = document.getElementById("linaBtn");
let nLikes2 = document.getElementById("nLikes2");
let like2 = 0;

linaBtn.onclick = ()=>{
    like2++;
    nLikes2.textContent = like2 + " " + "like(s)";
}

//Mateo

let mateoBtn = document.getElementById("mateoBtn");
let nLikes3 = document.getElementById("nLikes3");
let like3 = 0;

mateoBtn.onclick = ()=>{
    like3++;
    nLikes3.textContent = like3 + " " + "like(s)";
}