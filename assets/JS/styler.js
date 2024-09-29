let screen = document.getElementById('screen');

window.onscroll = function () {
    if (this.scrollY >= 50) {
        screen.style.opacity = '1'
    } else {
        screen.style.opacity= '0'
    }           
}