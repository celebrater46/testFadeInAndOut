"use strict";

const elZero = document.getElementById("zero");
const elOne = document.getElementById("one");
let nth = 0; // 何番目の画像か


let intervalId;
// let image = document.getElementById('targetImage');
// image.onclick = changeImage;

function changeImage () {

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
            //画像を交換
            // if(image.src === 'https://picsum.photos/id/1080/200'){
            //     image.src = 'https://picsum.photos/id/1039/200';
            // }else{
            //     image.src = 'https://picsum.photos/id/1080/200';
            // }


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

