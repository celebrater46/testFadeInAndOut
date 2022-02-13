"use strict";

const elZero = document.getElementById("zero");
const elOne = document.getElementById("one");

const changeImage = () => {
    if(elZero.style.opacity == ''){
        elZero.style.opacity = 1;
    }

    let opacityZero = elZero.style.opacity * 100;
    //フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
    let intervalZero = setInterval( () => {
        opacityZero = opacityZero - 10;
        elZero.style.opacity = opacityZero / 100;
        console.log("opacityZero: " + opacityZero);
        if(elZero.style.opacity <= 0){
            clearInterval(intervalZero);
        }
    }, 100);

    let opacityOne = elOne.style.opacity * 100;
    //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
    let intervalOne = setInterval( () => {
        opacityOne += 10;
        elOne.style.opacity = opacityOne / 100;
        console.log("opacityOne: " + opacityOne);
        if(elOne.style.opacity >= 1){
            clearInterval(intervalOne);
        }
    }, 100);
}

