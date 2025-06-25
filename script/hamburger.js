// Hamburger menu related code

const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const navBar = document.querySelector('nav')


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle("active")
    navList.classList.toggle("active-nav-list")
})

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove('active')
        navList.classList.remove('active-nav-list')
    })
})


// Using the following function when user clicks outside the navbar and navlist, the navlist closes
function handleClickOutside(event) {
    if (!navBar.contains(event.target)) {
        hamburger.classList.remove('active')
        navList.classList.remove('active-nav-list')
    }
}

document.addEventListener("click", handleClickOutside)