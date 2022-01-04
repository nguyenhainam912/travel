var header =  document.querySelector('.header');
header.innerHTML = `
        <div class="header-top">
        <div class="header-top-wrap">
            <div class="header-top__phone"> +84 321 666 666</div>
            <div class="header-top__social hide-on-tablet hide-on-mobile">
                <ul class="header-top__social-list">
                    <li class="header-top__social-item">
                        <i class="fab fa-pinterest-square"></i>
                    </li>
                    <li class="header-top__social-item">
                        <i class="fab fa-facebook"></i>
                    </li>
                    <li class="header-top__social-item">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li class="header-top__social-item">
                        <i class="fab fa-instagram"></i>
                    </li>
                    <li class="header-top__social-item">
                        <i class="fab fa-internet-explorer"></i>
                    </li>
                </ul>
            </div>
            <div class="header-top__login">
                <div class="header-top__login-login">login</div>
                <div class="header-top__login-register">register</div>
            </div>
        </div>                   
        </div>
        <div class="header-main">
        <div class="grid wide">
        <div class="row">
                <div class="header-main-warp">
                    <a href="../index.html" class="header-main__logo-link">
                        <img src="../assets/img/logo.webp" alt="" class="header-main__logo">
                        <div class="header-main__logo-name">TRAVEL</div>
                    </a>
                    <div class="header-main__nav">
                        <ul class="header-main__nav-list">
                            <li class="header-main__nav-item">
                                <a href="/pages/home.html">HOME</a>
                                <span class="header-main__nav-item-span"></span>
                            </li>
                            <li class="header-main__nav-item">
                                <a href="/pages/about.html">ABOUT </a>
                                <span class="header-main__nav-item-span"></span>
                            </li>
                            <li class="header-main__nav-item">
                                <a href="/pages/offers.html">OFFERS</a>
                                <span class="header-main__nav-item-span"></span>
                            </li>
                            <li class="header-main__nav-item">
                                <a href="/pages/new.html">NEW</a>
                                <span class="header-main__nav-item-span"></span>
                            </li>
                            <li class="header-main__nav-item">
                                <a href="/pages/contact.html">CONTACT</a>
                                <span class="header-main__nav-item-span"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="header-main__icon">
                        <div class="header-main__search">
                            <i class="ti-search header-main__search-icon"></i>
                            <input type="text" placeholder="Search..." class="header-main__search-input"> </input>
                        </div>
                        <div class="header-main__menu-on l-0">
                            <i class="ti-menu"></i>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </div>  
        <div class="header-menu l-0 ">
        <div class="header-menu__overlay"></div>
        <div class="header-menu__body">
            <ul class="header-menu__body-list">
                <li><a href="/pages/home.html" class="header-menu__body-item">Home</a></li>        
                <li><a href="/pages/about.html" class="header-menu__body-item">About</a></li>
                <li><a href="/pages/offers.html" class="header-menu__body-item">Offers</a></li>
                <li><a href="/pages/new.html" class="header-menu__body-item">New</a></li>
                <li><a href="/pages/contact.html" class="header-menu__body-item">Contact</a></li>
            </ul>
            <div class="header-menu__body-icon">
                <i class="ti-close"></i>
            </div>
        </div>
        </div> 
`



