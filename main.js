"use strict";

const elZero = document.getElementById("zero");
const elOne = document.getElementById("one");
// let isReverse = false;
let finished = [];

// const toggle = () => {
//     if(finished[0] && finished[1]){
//         isReverse = !isReverse;
//         finished = [false, false];
//     }
// }

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
        // isReverse = !isReverse;
        const nextImage = elOne.src.substr(-5);
        let image = new Image();
        image.onload = () => {
            // console.log(image.naturalWidth);
            // finished[0] = true;
            elZero.src = nextImage;
            // elZero.style.opacity = 1;
            window.setTimeout(() => {
                elZero.style.opacity = 1;
            }, 100);
            // elOne.style.opacity = 0;
        };
        image.src = nextImage;
        finished = [false, false];
    }
}

const changeImage = () => {
    // finished = [false, false];
    if(elZero.style.opacity === "" || elZero.style.opacity === 0) {
        elZero.style.opacity = 1;
    }
    if(elOne.style.opacity !== 0){
        elOne.style.opacity = 0;
    }
    console.log(elZero.src);
    console.log(elOne.src);
    if(elZero.src === elOne.src) {
        console.log("HELLO!!!!!!!!!!!!!");
        elOne.src = getNextImage();
    }
    // elZero.style.opacity = isReverse ? 0 : 1;
    // elOne.style.opacity = isReverse ? 1 : 0;

    let opacityZero = elZero.style.opacity * 100;
    // フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
    let intervalZero = setInterval( () => {
        opacityZero = opacityZero - 10;
        elZero.style.opacity = opacityZero / 100;
        console.log("opacityZero: " + opacityZero);
        if(elZero.style.opacity <= 0){
            clearInterval(intervalZero);
            // elZero.src = "1.jpg";
            finished[0] = true;
            resetOpacity();
            // let image = new Image();
            // image.onload = () => {
            //     console.log(image.naturalWidth);
            //     finished[0] = true;
            // };
            // image.src = "1.jpg";
            // elZero.style.opacity = 1;
            // isReverse = !isReverse;

            // toggle();
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
            // elOne.style.opacity = 0;
            // elOne.src = "0.jpg";
            finished[1] = true;
            resetOpacity();
            // let image = new Image();
            // image.onload = () => {
            //     console.log(image.naturalWidth);
            //     finished[1] = true;
            // };
            // image.src = "1.jpg";
            // toggle();
        }
    }, 100);


    // console.log(isReverse);
}

