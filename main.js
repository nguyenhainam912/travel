const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const headerMenuIcon = $('.header-main__menu-on')
const headerMenu = $('.header-menu')
const headerMenuClose = $('.header-menu__body-icon')
const headerSearch = $('.header-main__search-icon')
const headerInputSearch = $('.header-main__search-input')
const searchItems = $$('.search-top__item')
const searchItemActive = $('.search-top__item.active-btn')

const headerTop = $('.header-top')
const headerMain = $('.header-main')
const headerMainWrap = $('.header-main-warp')

const lines = $$('.header-main__nav-item-span')
const headerLines = $$('.header-main__nav-item')
const menus = $$('.header-menu__body-item')

// menu header
headerLines.forEach((headerLine, index) => {
    const line = lines[index]
    const menu = menus[index]
    
    headerLine.onclick = () => {
        $('.header-main__nav-item-span.active').classList.remove('active')       
        $('.header-menu__body-item.active').classList.remove('active')
        line.classList.add('active')
        menu.classList.add('active')
    }

    menu.onclick = () => {
        $('.header-menu__body-item.active').classList.remove('active')
        menu.classList.add('active')
        headerMenu.classList.remove('open')
    }

})

// open/close menu on tablet and mobile
headerMenuIcon.addEventListener('click',function () {
    headerMenu.classList.add('open')
})

headerMenuClose.addEventListener('click',function () {
    headerMenu.classList.remove('open')
})

// toggle header search 
headerSearch.addEventListener('click',function () {
    headerInputSearch.classList.toggle('open')
})

// search 
searchItems.forEach((searchItem) => {
    searchItem.onclick = function () {  
        $('.search-top__item.active-btn').classList.remove('active-btn')   
        this.classList.add('active-btn')
    }
})

// scroll header
window.addEventListener('scroll',myfunction)

function myfunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerMain.classList.add('scroll')
        headerMainWrap.classList.add('scroll')
    }else {
        headerMain.classList.remove('scroll')
        headerMainWrap.classList.remove('scroll')
    }
   
}


    


