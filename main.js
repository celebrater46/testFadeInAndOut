"use strict";

const elZero = document.getElementById("zero");
const elOne = document.getElementById("one");
let isReverse = false;
let finished = [];

const toggle = () => {
    if(finished[0] && finished[1]){
        isReverse = !isReverse;
        finished = [false, false];
    }
}

const changeImage = () => {
    finished = [false, false];
    elZero.style.opacity = isReverse ? 0 : 1;
    elOne.style.opacity = isReverse ? 1 : 0;

    let opacityZero = elZero.style.opacity * 100;
    // フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
    let intervalZero = setInterval( () => {
        opacityZero = opacityZero + (isReverse ? 10 : -10);
        elZero.style.opacity = opacityZero / 100;
        console.log("opacityZero: " + opacityZero);
        if(elZero.style.opacity <= 0 || elZero.style.opacity >= 1){
            clearInterval(intervalZero);
            // elZero.src = "1.jpg";
            // elZero.style.opacity = 1;
            // isReverse = !isReverse;
            finished[0] = true;
            toggle();
        }
    }, 100);

    let opacityOne = elOne.style.opacity * 100;
    // フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
    let intervalOne = setInterval( () => {
        opacityOne = opacityOne + (isReverse ? -10 : 10);
        elOne.style.opacity = opacityOne / 100;
        console.log("opacityOne: " + opacityOne);
        if(elOne.style.opacity <= 0 || elOne.style.opacity >= 1){
            clearInterval(intervalOne);
            // elOne.style.opacity = 0;
            // elOne.src = "0.jpg";
            finished[1] = true;
            toggle();
        }
    }, 100);


    // console.log(isReverse);
}

