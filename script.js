const imgs = [
    {heading:"Darkness", subheading:"It's dark.. and blurry", img:"./imgs/dark.jpg", bg:"#A09D9C"},
    {heading:"Wetness", subheading:"Sooo much water", img:"./imgs/blue.jpg", bg:"#2596be"},
    {heading:"Greenness", subheading:"Shrek's swamp", img:"./imgs/green.jpg", bg:"#8bb43a"},
    {heading:"Yellowness", subheading:"Sooo many dandelions", img:"./imgs/yellow.jpg", bg:"#ffda18"}
]

// Functions // 

// Function to change all elements needed. Takes in an array index i
let changeElements = (i) => {
    img.src= imgs[i].img; 
    heading.innerText = imgs[i].heading
    subheading.innerText = imgs[i].subheading; 
    caption.style.background = imgs[i].bg;
}

let getLastImg = () => { 
    (i === 0) ? i = (imgs.length - 1) : i--; 
    changeElements(i);
}

let getNextImg = () => { 
    (i === (imgs.length - 1)) ? i = 0 : i++; 
    changeElements(i); 
}
// Variables // 
const img = document.querySelector("#imgContainer img");
const heading = document.querySelector("#captionContainer h1");
const subheading = document.querySelector("#captionContainer h2");
const caption = document.querySelector("#captionContainer"); 
const down = document.getElementById("down");
const up = document.getElementById("up");

let i = 0; 

// Initialize 
changeElements(0); 

down.addEventListener("click", getLastImg);
up.addEventListener("click", getNextImg);


