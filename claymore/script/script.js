
window.onload = function(){

    /*FIXED HEADER*/

    let header = document.getElementById('header')
    let intro = document.getElementById('intro')
    let nav = document.getElementById('nav')
    let introH = intro.scrollHeight
    window.canCheck = true

    showHeader()
    checkCurrentSection()

    window.onscroll = function(){
        showHeader()
        checkCurrentSection()

    }

    function showHeader(){
        if(this.scrollY > introH - 200){
            header.classList.add('fixed')
            nav.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
            nav.classList.remove('fixed')
        }
    }


    /*NAV INDICATOR, SMOOTH SCROLL*/

    let links = document.querySelectorAll('[data-scroll]')
    let indicator = document.getElementById('indicator')
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(event){
            event.preventDefault()
            window.canCheck = false

            /*INDICATOR*/

            indicator.style.left = this.offsetLeft + 'px'
            indicator.style.width = this.offsetWidth + 'px'


            /*SMOOTH SCROLL*/

            let elementID = this.getAttribute('data-scroll')
            let elementOffset = document.querySelector(elementID).offsetTop

            if(window.pageYOffset < elementOffset - 150){
                let i  = window.pageYOffset
                let interval = setInterval(function(){

                    window.scrollTo(0, i)
                    i+=10
                    if(i >= elementOffset - 150) {
                        clearInterval(interval)
                        window.canCheck = true
                    }

                }, 1)
            }else{
                let i  = window.pageYOffset
                let interval = setInterval(function(){
                    window.scrollTo(0, i)
                    i-=10
                    if(i <= elementOffset - 150){
                        clearInterval(interval)
                        window.canCheck = true
                    }

                }, 1)
            }

        })
    }



    /*CURRENT SECTION FOR INDICATOR*/

    function checkCurrentSection(){
        if(window.canCheck){
            let links = document.querySelectorAll('[data-scroll]')
            let indicator = document.getElementById('indicator')
            let sectionArr = []
            for(let i = 0; i < links.length; i++){
                let elemID = links[i].getAttribute('data-scroll')
                sectionArr[i]= document.querySelector(elemID).offsetTop
        }

        for(let i = 0; i < sectionArr.length; i++){
            if(window.scrollY <= sectionArr[i]+200 && window.scrollY >= sectionArr[i]-200){
                indicator.style.left = links[i].offsetLeft + 'px'
                indicator.style.width = links[i].offsetWidth + 'px'

                }
            }
        }
    }

}/*/WINDOW ONLOAD*/



/*BURGER MENU*/

function showMenu(){
    if(nav.style.display == 'block'){
        nav.style.display = 'none'
    }else{
        nav.style.display = 'block'
    }

     window.addEventListener('resize', event =>{
        if(window.innerWidth >= 790){
            nav.style.display = 'block'
        }
    }, false)

}













