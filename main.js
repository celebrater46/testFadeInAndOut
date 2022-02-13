"use strict";

const elZero = document.getElementById("zero");
const elOne = document.getElementById("one");
let finished = [];

const getNextImage = () => {
    const src = elZero.src.substr(-5);
    switch (src){
        case "0.jpg": return "1.jpg";
        case "1.jpg": return "0.jpg";
        default:
            console.log("Error: elZero.src.substr() == " + src);
            return null;
    }
}

const resetOpacity = () => {
    if(finished[0] && finished[1]){
        const nextImage = elOne.src.substr(-5);
        elZero.src = nextImage;
        window.setTimeout(() => {
            elZero.style.opacity = 1;
            elOne.style.opacity = 0;
            elOne.src = getNextImage();
        }, 100);
        finished = [false, false];
    }
}

const changeImage = () => {
    if(elZero.style.opacity === "" || elZero.style.opacity === 0) {
        elZero.style.opacity = 1;
    }
    if(elOne.style.opacity !== 0){
        elOne.style.opacity = 0;
    }

    let opacityZero = elZero.style.opacity * 100;
    // フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
    let intervalZero = setInterval( () => {
        opacityZero = opacityZero - 10;
        elZero.style.opacity = opacityZero / 100;
        console.log("opacityZero: " + opacityZero);
        if(elZero.style.opacity <= 0){
            clearInterval(intervalZero);
            finished[0] = true;
            resetOpacity();
        }
    }, 100);

    let opacityOne = elOne.style.opacity * 100;
    // フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
    let intervalOne = setInterval( () => {
        opacityOne = opacityOne + 10;
        elOne.style.opacity = opacityOne / 100;
        console.log("opacityOne: " + opacityOne);
        if(elOne.style.opacity >= 1){
            clearInterval(intervalOne);
            finished[1] = true;
            resetOpacity();
        }
    }, 100);
}

