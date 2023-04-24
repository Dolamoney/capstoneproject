// Create toggle control for hamburger

// i need to get the hamburger
const menuButton = document.querySelector('#menutoggle');

//  i need to get my navigation items

const navLinks = document.querySelectorAll('.navlink');

// i need to add an eventlistner on the menubutton(hamburger)

menuButton.addEventListener('click',()=>{

    document.body.classList.toggle('open_nav');
})

// i need to add an eventlistner on the nav links

navLinks.forEach((navlink)=>{
     navlink.addEventListener('click',()=>{
        document.body.classList.remove('open_nav');
     })
})