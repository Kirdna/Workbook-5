"use strict";


window.onload = () => {
    
    const goToGoogleBtn = document.getElementById("goToGoogleBtn");
    const goToSchoolBtn = document.getElementById("goToSchoolBtn");
    const giftBtnBtn = document.getElementById("giftBtn");

    goToGoogleBtn.onclick = onGoToGoogleBtnClicked;
    goToSchoolBtn.onclick = onGoToSchoolBtnClicked;
    giftBtnBtn.onclick = onGiftBtnClicked;
}

function onGoToGoogleBtnClicked(){
    console.log("clicked!");
    window.open("https://www.google.com/","_self");
}

function onGoToSchoolBtnClicked(){
    console.log("clicked!");
    window.open("https://www.w3schools.com/js/default.asp", "_self");
    
}

function onGiftBtnClicked(){
    console.log("clicked!");
    window.open("images.html","_self");
    
}