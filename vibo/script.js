
window.onload = function(){

    /*FIXED HEADER*/

    let intro = document.getElementById('intro')
    let header = document.getElementById('header')
    let introH = intro.scrollHeight

    showHeader()

    window.onscroll = function(){
        showHeader()
    }

    function showHeader(){
        if(this.scrollY > introH - 500){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    }


    /*SMOOTH SCROLL*/

    let links = document.querySelectorAll('[data-scroll]')

    for (let i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(event){
            event.preventDefault()

            let elementID = this.getAttribute('data-scroll')
            let elementOffset = document.querySelector(elementID).offsetTop

            if(window.pageYOffset < elementOffset - 150){
                let i  = window.pageYOffset
                let interval = setInterval(function(){

                    window.scrollTo(0, i)
                    i+=10
                    if(i >= elementOffset - 50) {
                        clearInterval(interval)
                    }

                }, 1)
            }else{
                let i  = window.pageYOffset
                let interval = setInterval(function(){
                    window.scrollTo(0, i)
                    i-=10
                    if(i <= elementOffset - 50){
                        clearInterval(interval)
                    }

                }, 1)
            }
        })
    }

    /*TABS*/

    let tabs = document.querySelectorAll('.services-item')
    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener('click', function(){
            let content = this.lastElementChild

            if(this.classList.contains('active')){
                content.style.maxHeight = null
                this.classList.remove('active')
            }else{
                this.classList.add('active')
                content.style.maxHeight = content.scrollHeight + 'px'
            }

        })
    }

}



function showNav(){
    let nav = document.getElementById('nav')
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }

}


















