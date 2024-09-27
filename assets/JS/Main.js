// Function title Document??!
function getTitle() {
    let test = document.getElementById('test')
    titlPage = document.title = 'Acadmy'
    let mainHref = test.href;
    window.addEventListener('blur', () => {
        document.title = 'Come Back :(';
        test.href = 'assets/IMG/icon/pngegg.png'
    })
    
    window.addEventListener('focus', () => {
        document.title = titlPage;
        test.href = mainHref;
    })
}

// HRADER FUNCTION: = () =>?
function getHeader() {
    let header = document.getElementById('headyElement');
    window.onscroll = function () {
        if (this.scrollY >= 100) {
            header.style.background = 'rgba(0,0,0, .4)'
        } else {
            header.style.background = 'transparent'
        }           
    }
}

function getLabel() {
// func (ARROW)
// LI
let clickAble = document.getElementById('clickAble');
// UL
let firstTable = document.getElementById('firstTable');
// I
let iconx = document.getElementById('iconx');
let exit = document.querySelector('.exit');

    clickAble.addEventListener('click', () => {
        firstTable.style.display = 'block';
        firstTablePlan.style.display = 'none';
        firstTableDiff.style.display = 'none';
        iconx.style.cssText = `
        transform: rotatex(0) translatey(0);
        `
        iconPlan.style.cssText = `
        transform: rotatex(180deg) translatey(-2px);
        `
        iconDiff.style.cssText = `
        transform: rotatex(180deg) translatey(-2px);
        `
    })

    exit.onclick = () => {
        firstTable.style.display = 'none';
    }
}

function getplans() {
    // func (ARROW)
// LI
let clickAblePlan = document.getElementById('clickAblePlan');
// UL
let firstTablePlan = document.getElementById('firstTablePlan');
// I
let iconPlan = document.getElementById('iconPlan');
let exitPlan = document.querySelector('.exit-plan');

    clickAblePlan.addEventListener('click', () => {
        firstTablePlan.style.display = 'block';
        firstTable.style.display = 'none';
        firstTableDiff.style.display = 'none';
        iconPlan.style.cssText = `
        transform: rotatex(0) translatey(0);
        `;
        iconx.style.cssText = `
        transform: rotatex(180deg) translatey(-2px);
        `;
        iconDiff.style.cssText = `
        transform: rotatex(180deg) translatey(-2px);
        `
    })

    exitPlan.onclick = () => {
        firstTablePlan.style.display = 'none';
    }
}

function getDiff() {
    // func (ARROW)
    // LI
    let clickAbleDiff = document.getElementById('clickAbleDiff');
    // UL
    let firstTableDiff = document.getElementById('firstTableDiff');
    // I
    let iconDiff = document.getElementById('iconDiff');
    let exitDiff = document.querySelector('.exit-diff');
    
    clickAbleDiff.addEventListener('click', () => {
        firstTableDiff.style.display = 'block';
        firstTablePlan.style.display = 'none';
        firstTable.style.display = 'none';
        iconDiff.style.cssText = `
        transform: rotatex(0) translatey(0);
        `
        iconx.style.cssText = `
        transform: rotatex(180deg) translatey(-2px);
        `
        iconPlan.style.cssText = `
        transform: rotatex(180deg) translatey(-2px);
        `
    })

    exitDiff.onclick = () => {
        firstTableDiff.style.display = 'none';
    }
}

window.onload = () => {
    getTitle();
    getHeader();
    getLabel();
    getplans();
    getDiff();
}