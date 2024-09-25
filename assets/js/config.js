// let span = document.querySelector('.up')
// window.onscroll = function () {
//     if (this.scrollY >= 500) {
//         span.classList.add('show');
//     } else {
//         span.classList.remove('show');
//     }           
//  }

//  span.onclick = function () {
//     scrollTo ({
//         top: 0 ,
//         behavior: "smooth" ,
//     })
//}

let icon = document.getElementById('rotateIcon');
let iconX = document.getElementById('rotateIconX');
let iconXx = document.getElementById('rotateIconXx');

let servBox = document.getElementById('servBox');
let servBoxX = document.getElementById('servBoxX');
let servBoxXx = document.getElementById('servBoxXx');

let blockServ = document.getElementById('blockServ');
let blockServX = document.getElementById('blockServX');
let blockServXx = document.getElementById('blockServXx');

let exit = document.getElementById('exit');
let eNother =document.getElementById('exitX');
let eNotherx =document.getElementById('exitXx');

let nav = document.getElementById('navLeft')
let gitFunc = document.getElementById('gitFunc')
let bullseye = document.getElementById('bullseye')



function getFunc() {
    window.onscroll = function re() {
        if (this.scrollY >= 50) {
            gitFunc.style.background = '#141414'
            gitFunc.style.transition  = '.6s'
            bullseye.style.color = '#fff'
        } else {
            gitFunc.style.background = '#242424'
            bullseye.style.color = '#141414'
        }           
    }
}

function getServices() {
    servBox.addEventListener('click', () => {
        icon.style.cssText = `
        transform: rotatex(0);
        `;
        iconX.style.cssText = `
        transform: rotatex(180deg);
        `;
        iconXx.style.cssText = `
        transform: rotatex(180deg);
        `;
        blockServ.style.display = 'block';
        blockServX.style.display = 'none';
        blockServXx.style.display = 'none';
    })
}
// function gitPlans()
function getPlans() {
    servBoxX.addEventListener('click', () => {
        iconX.style.cssText = `
        transform: rotatex(0);
        `;
        iconXx.style.cssText = `
        transform: rotatex(180deg);
        `;
        icon.style.cssText = `
        transform: rotatex(180deg);
        `;
        blockServX.style.display = 'block';
        blockServ.style.display = 'none';
        blockServXx.style.display = 'none';
    })
}

function getDiff() {
    servBoxXx.addEventListener('click', () => {
        iconXx.style.cssText = `
        transform: rotatex(0);
        `;
        iconX.style.cssText = `
        transform: rotatex(180deg);
        `;
        icon.style.cssText = `
        transform: rotatex(180deg);
        `;
        blockServXx.style.display = 'block';
        blockServX.style.display = 'none';
        blockServ.style.display = 'none';
    })
}


function goExit() {
    exit.onclick = function () {
        blockServ.style.display = 'none';
        icon.style.cssText = `
        transform: rotatex(180deg);
        `;
    }
    eNother.onclick = function() {
        blockServX.style.display = 'none';
    }
    eNotherx.onclick = function() {
        blockServXx.style.display = 'none';
    }
}



window.onload = () => {
    getServices();
    getPlans();
    getDiff();
    goExit();
    getFunc()
}