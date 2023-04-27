//way point
const  navControl = document.querySelector('#nav-control')
var waypoint = new Waypoint({
    element: document.getElementById('features'),
    handler: function(direction) {
      if(direction === "down") {
        navControl.classList.add('fixed', 'w-full','shadow-lg', 'animate__fadeInDown')
      } else {
        navControl.classList.remove('fixed', 'w-full','shadow-lg','animate__fadeInDown')
      }
    },
    offset: '75%'
  })


// Dark mode
const toogle = document.getElementById('toggleB')

    const changeThemeToDark = () => {
        document.documentElement.classList.add('dark')
        localStorage.setItem('data-theme', 'dark')

    }

    const changeThemeToLight = () => {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('data-theme', 'light')
    }

  

    toggleB.addEventListener('click', () => {
        const changeTheme = localStorage.getItem('data-theme')
        if(changeTheme === 'dark')  {
            changeThemeToLight()
        } else {
            changeThemeToDark()
        }
    })

    const changeTheme = localStorage.getItem('data-theme')
    if(changeTheme === 'dark')  {
        changeThemeToDark()
        toggleB.setAttribute('checked', 'checked')
    } else {
        changeThemeToLight()
    }   

  // ScrollReveal
  ScrollReveal().reveal('.headline', { 
    delay: 300,
    origin: 'bottom',
    distance: '50px',
    interval: 200,
    scale: 0.85,
    reset: true
});

   
// Change Image

function changeImg1 () {
    document.getElementById("img").src = "./assets/img/payroll.jpg";
}
  
function changeImg2 () {
    document.getElementById("img").src = "./assets/img/claim.jpg";
   
}

function changeImg3 () {
    document.getElementById("img").src = "./assets/img/Vat.jpg";
   
}

function changeImg4 () {
    document.getElementById("img").src = "./assets/img/reporting.jpg";
   
}

// Scroll image
let scrollImage = document.querySelector("#scroll-image")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

scrollImage.addEventListener("wheel", (evt) => {
    
    scrollImage.style.scrollBehavior = "auto";
    
});

btn1.addEventListener("click", () => {
    scrollImage.style.scrollBehavior = "smooth";
    scrollImage.scrollLeft -= 900;
    scrollImage.scrollLeft -= 1800;
  
});

btn2.addEventListener("click", () => {
    scrollImage.style.scrollBehavior = "smooth";
    scrollImage.scrollLeft += 900;
    
});


btn3.addEventListener("click", () => {
    scrollImage.style.scrollBehavior = "smooth";
    scrollImage.scrollLeft += 1800;
});




