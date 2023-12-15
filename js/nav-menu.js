/*open the menu when clicking on the icon menu  */
const menuBurger = document.querySelector(".burger-menu");
const menuNav = document.querySelector(".header__navigation");
if (menuBurger) {
    menuBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        menuNav.classList.toggle('active');
    });
}

/*scroll on click */
const menuLinks = document.querySelectorAll(".header__link[data-goto]");

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.getElementById(menuLink.dataset.goto)) {
            e.preventDefault();

            const gotoBlock = document.getElementById(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            /* close the menu when clicking on the link from the menu */
            if (menuBurger.classList.contains("active")) {
                document.body.classList.remove("lock")
                menuBurger.classList.remove("active")
                menuNav.classList.remove("active")
            }
        }
    }
}