'use strict'


/*SHOW NAV*/

function showNav(){
    let nav = document.getElementById('nav')
    let burger = document.getElementById('burger')
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }

    window.addEventListener('resize', event =>{
        if(window.innerWidth >= 768){
            nav.classList.remove('active')
        }
    }, false)
}

window.onload = function(){
    /*FIXED HEADER */
    let header = document.getElementById('header')
    let intro = document.getElementById('intro')
    let nav = document.getElementById('nav')
    let introH = intro.scrollHeight
    let scrollPos = window.scrollY

    showHeader()

    window.onscroll = function(){
        scrollPos = this.scrollY
        showHeader()
    }

    function showHeader(){
        if(scrollPos >= introH){
             header.classList.add('fixed')
             nav.classList.add('fixed')
        }else{
             header.classList.remove('fixed')
             nav.classList.remove('fixed')
        }
    }



    /*SMOOTH SCROLL*/

    let links = document.querySelectorAll('[data-scroll]')
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(event){
            event.preventDefault()

            let elementID = this.getAttribute('data-scroll')
            let elementOffset = document.querySelector(elementID).offsetTop

            let i  = window.pageYOffset

            if(window.pageYOffset < elementOffset - 50){
                let i  = window.pageYOffset
                let interval = setInterval(function(){

                    window.scrollTo(0, i)
                    i+=10
                    if(i >= elementOffset - 50) clearInterval(interval)

                }, 1)
            }else{
                let i  = window.pageYOffset
                let interval = setInterval(function(){
                    window.scrollTo(0, i)
                    i-=10
                    if(i <= elementOffset - 50) clearInterval(interval)

                }, 1)
            }
        })
    }



}




