let servicesImg = document.getElementsByClassName('additional')[0].getElementsByTagName('img')[0];
let services = document.getElementsByClassName('services')[0];


servicesImg.onclick = () => {
    services.classList.toggle('hide');
    servicesImg.classList.toggle('pressed');
}



// Timer

var countDownDate = new Date("Jan 5, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementsByClassName("timer")[0].innerHTML = hours + ":"
  + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Timer

// Burger

let burger = document.getElementsByClassName('burger_menu')[0];
let = menuBack = document.getElementsByClassName('menu_back')[0];

let pos = false;
burger.onclick = () => {
    if (pos) {
        pos = false;
        burger.src = 'img/icon/menuBurger.svg';
        document.body.style.overflow = 'visible';
        menuBack.style.display = 'none';
    } else {
        pos = true;
        burger.src = 'img/icon/arrow-right.svg';
        document.body.style.overflow = 'hidden';
        menuBack.style.display = 'block';
    }
}

// Burger

// Slider


let left = document.querySelectorAll('.arrow')[0];
let right = document.querySelectorAll('.arrow')[1];


let card_width = 980;
if (window.innerWidth > 1439) {
    card_width = 980;
} else if (window.innerWidth < 768) {
    card_width = 321;
} else {
    card_width = 518;
}
let currentSlide = 0;
let slides = document.getElementsByClassName('slide')[0];
let btns = document.getElementsByClassName('cars')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
let mob_nav = document.getElementsByClassName('slide_btn');

left.onclick = () => {
    currentSlide += currentSlide==0 ? 2 : -1;
    slides.style.marginLeft = -card_width*currentSlide+'px';
    clear();
    btns[currentSlide].classList.add('active');
}
right.onclick = () => {
    currentSlide += currentSlide==2 ? -2 : 1;
    slides.style.marginLeft = -card_width*currentSlide+'px';
    clear();
    btns[currentSlide].classList.add('active');
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 1439) {
        card_width = 980;
    } else if (window.innerWidth < 768) {
        card_width = 321;
    } else {
        card_width = 518;
    }
    currentSlide = 0;
    slides.style.marginLeft = -card_width*currentSlide+'px';
    clear();
    btns[currentSlide].classList.add('active');
});

function clear() {
    for (let i = 0; i<btns.length; i++) {
        btns[i].classList.remove('active');
        mob_nav[i].classList.remove('current');
    }
}
for (let i = 0; i<btns.length; i++) {
    btns[i].onclick = () => {
        clear();
        btns[i].classList.add('active');
        currentSlide = i;
        slides.style.marginLeft = -card_width*currentSlide+'px';
        mob_nav[i].classList.add('current');
    }
}
// Slider