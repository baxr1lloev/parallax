let moon = document.querySelector('#moon')
let stars = document.querySelector('#stars')
let mountains_behind = document.querySelector('#mountains_behind')
let text = document.querySelector('#text');
let btn = document.querySelector('#btn')

window.onscroll = () => {
    let scrollY = window.scrollY
    console.log(scrollY);
    moon.style.top = scrollY * 0.75 + "px"
    stars.style.marginLeft = scrollY / 2 + "px"
    text.style.marginRight = scrollY * 4 + 'px'
    text.style.marginTop = scrollY * 1.5 + 'px'
    btn.style.marginTop = scrollY * 1.5 + 'px'
    mountains_behind.style.top = scrollY * 1 + 'px'
}