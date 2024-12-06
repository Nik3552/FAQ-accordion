let mainTip = document.querySelector('.main-tip');
let mainDiv = document.querySelector(".main");
let mainImg = document.getElementById("main-img");

mainDivClicked = true;

mainDiv.addEventListener("click", function () {
    if (mainDivClicked == true) {
        mainTip.style.display = "none";
        mainDivClicked = !mainDivClicked;
        mainImg.src = "assets/images/icon-plus.svg";
    } else {
        mainTip.style.display = "block";
        mainDivClicked = !mainDivClicked;
        mainImg.src = "assets/images/icon-minus.svg";
    }
})

mainDiv.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (mainDivClicked == true) {
            mainTip.style.display = "none";
            mainDivClicked = !mainDivClicked;
            mainImg.src = "assets/images/icon-plus.svg";
        } else {
            mainTip.style.display = "block";
            mainDivClicked = !mainDivClicked;
            mainImg.src = "assets/images/icon-minus.svg";
        }
    }
})

// FIRST TIP

let firstTip = document.querySelector('.first-tip');
let firstDiv = document.querySelector(".first-div");
let firstImg = document.getElementById("first-img");

firstDivClicked = true;

firstDiv.addEventListener("click", function () {
    if (firstDivClicked == true) {
        firstTip.style.display = "block";
        firstDivClicked = !firstDivClicked;
        firstImg.src = "assets/images/icon-minus.svg";
    } else {
        firstTip.style.display = "none";
        firstDivClicked = !firstDivClicked;
        firstImg.src = "assets/images/icon-plus.svg";
    }
})

firstDiv.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (firstDivClicked == true) {
            firstTip.style.display = "block";
            firstDivClicked = !firstDivClicked;
            firstImg.src = "assets/images/icon-minus.svg";
        } else {
            firstTip.style.display = "none";
            firstDivClicked = !firstDivClicked;
            firstImg.src = "assets/images/icon-plus.svg";
        }
    }
})

// SECOND TIP
let secondTip = document.querySelector('.second-tip');
let secondDiv = document.querySelector(".second-div");
let secondImg = document.getElementById("second-img");

secondDivClicked = true;

secondDiv.addEventListener("click", function () {
    if (secondDivClicked == true) {
        secondTip.style.display = "block";
        secondDivClicked = !secondDivClicked;
        secondImg.src = "assets/images/icon-minus.svg";
    } else {
        secondTip.style.display = "none";
        secondDivClicked = !secondDivClicked;
        secondImg.src = "assets/images/icon-plus.svg";
    }
})

secondDiv.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (secondDivClicked == true) {
            secondTip.style.display = "block";
            secondDivClicked = !secondDivClicked;
            secondImg.src = "assets/images/icon-minus.svg";
        } else {
            secondTip.style.display = "none";
            secondDivClicked = !secondDivClicked;
            secondImg.src = "assets/images/icon-plus.svg";
        }
    }
})

// THIRD TIP
let thirdTip = document.querySelector('.third-tip');
let thirdDiv = document.querySelector(".third-div");
let thirdImg = document.getElementById("third-img");

thirdDivClicked = true;

thirdDiv.addEventListener("click", function () {
    if (thirdDivClicked == true) {
        thirdTip.style.display = "block";
        thirdDivClicked = !thirdDivClicked;
        thirdImg.src = "assets/images/icon-minus.svg";
    } else {
        thirdTip.style.display = "none";
        thirdDivClicked = !thirdDivClicked;
        thirdImg.src = "assets/images/icon-plus.svg";
    }
})

thirdDiv.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (thirdDivClicked == true) {
            thirdTip.style.display = "block";
            thirdDivClicked = !thirdDivClicked;
            thirdImg.src = "assets/images/icon-minus.svg";
        } else {
            thirdTip.style.display = "none";
            thirdDivClicked = !thirdDivClicked;
            thirdImg.src = "assets/images/icon-plus.svg";
        }
    }
})