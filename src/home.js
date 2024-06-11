//Creates top bar

let menuLinks = [
    {text: "Home", href: "./home.html"},
    {text: "Quiz", href: "./index.html"},
]

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "green";
topMenuEl.classList.add("flex-around");

menuLinks.forEach(function createLink(link){
    let anchor = document.createElement("a");
    anchor.setAttribute("href", link.href);
    anchor.textContent = link.text;
    topMenuEl.appendChild(anchor);
});

//Creates documeant fragment to be appended into container
let fragment = document.createDocumentFragment();

//Create and append image
let image1 = document.createElement('img');
image1.src = './src/images/Sparking_Zero.jpg';
image1.alt = 'Sparking Zero Logo';
image1.style.width = "550px";
fragment.appendChild(image1);

//Title Creation
let title = document.createElement('h1');
title.textContent = "Welcome to my Dragon Ball Z Website!";
title.style.paddingTop = "10px";
fragment.appendChild(title);

//Paragraph after title
let paragraph1 = document.createElement('p');
paragraph1.textContent = "With the release of the game Dragon Ball: Sparking Zero soon in the fall of this year, I wanted to make a website to commemorate its arrival. I have also made a small quiz to test your Dragon Ball knowledge in the navigation bar. Have fun with it!"
paragraph1.style.paddingTop = "15px";
fragment.appendChild(paragraph1);

//2nd image and gif
let image2 = document.createElement('img');
image2.src = './src/images/gif1.jfif';
image2.alt = 'Sparking Zero Combat 1';
image2.style.width = "550px";
image2.style.height = "250px";
image2.style.padding = "20px";
//Was used in CSS but changed to event listener
image2.classList.add('hover-gif');
fragment.appendChild(image2);

//Create 2nd paragraph
let paragraph2 = document.createElement('p');
paragraph2.textContent = "Hover over the picture above to see some gameplay from Dragon Ball: Sparking Zero's trailer! Also click on the image above the title to see the original game Budokai Tenkaichi 3 released in 2005!";
paragraph2.style.paddingTop = "15px";
fragment.appendChild(paragraph2);

//Used to alternate images when clicked on
image1.addEventListener("click", () =>{
    const currentSrc = image1.getAttribute('src');
    // console.log(currentSrc);
    if(currentSrc === './src/images/budokai.webp'){
        image1.src = './src/images/Sparking_Zero.jpg';
        return;
    }
    image1.style.height = "250px";
    image1.src = './src/images/budokai.webp';

    
})

//Used  to imitate hover to activate gif
image2.addEventListener("mouseover", () =>{
    image2.src = './src/images/gif1.gif';
})
image2.addEventListener("mouseout", () =>{
   image2.src = './src/images/gif1.jfif';
})

//Append entire fragment into container
let container = document.querySelector('.about-container');
container.appendChild(fragment)