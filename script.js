'use strict'

$(document).ready(function () {
    let pics = ['18', '19', '20', '21', '22', '23', '24', '25'];//ファイル名の差異部分だけを配列に入れる
    let i = 7;//画像は５枚表示なので２番目の位置は最後の配列から始める
    setInterval(function () {
        let filename1 = ('./img/sample' + pics[i] + '.png');//ファイル名を事前に作成する
        document.getElementById('picSec1').src = filename1;
        if (i === 7) {
            i = 0
        } else {
            i += 1;
        }
        let filename2 = ('./img/sample' + pics[i] + '.png');
        document.getElementById('picSec2').src = filename2;
        if (i === 7) {
            i = 0
        } else {
            i += 1;
        }
        let filename3 = ('./img/sample' + pics[i] + '.png');
        document.getElementById('picSec3').src = filename3;
        if (i === 7) {
            i = 0
        } else {
            i += 1;
        }
        let filename4 = ('./img/sample' + pics[i] + '.png');
        document.getElementById('picSec4').src = filename4;
        if (i === 7) {
            i = 0

        } else {
            i += 1;
        }
        let filename5 = ('./img/sample' + pics[i] + '.png');
        document.getElementById('picSec5').src = filename5;
        i = i - 3;
        if (i < 0) {
            i = 7 + (i + 1);
        }
        }, 1600);//インターバルの時間を指定
});