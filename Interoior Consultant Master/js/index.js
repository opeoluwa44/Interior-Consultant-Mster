const menuBtn = document.querySelector('.menu')
const exitBtn = document.querySelector('.exit')
const nav = document.querySelector('.nav')

//console.log (closeBtn)

function menu(){
    menuBtn.addEventListener = nav
    nav.classList.add("open-nav")
}

function exit(){
    exitBtn.addEventListener = nav
    nav.classList.remove("open-nav")
}