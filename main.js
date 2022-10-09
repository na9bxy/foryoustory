function touchscreen() {
    setTimeout( function () {
        document.getElementById('touchscreen').onclick = function () { boxnotopen()};
    }, 1);
}

function boxnotopen() {
    document.getElementById('bg').style.backgroundImage="url(boxnotopen.gif)";

    setTimeout( function () {
        document.getElementById('text').innerHTML = "ดูเหมือนว่ามีกล่องอะไรสักอย่างนะ ลองเปิดดูสิ";
    }, 1000);
    

    setTimeout( function () {
        document.getElementById('touchscreen').onclick = function () { boxopenbutblack()};
    }, 2000);
}

function boxopenbutblack() {

    document.getElementById('text').innerHTML = "";
    document.getElementById('bg').style.backgroundImage="url(boxopenbutblack.gif)";
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(whatisblack.gif)";
    }, 1000);
    setTimeout( function () {
        document.getElementById('text').innerHTML = "มันคืออะไรน่ะ ลองเข้าไปดูใกล้ๆสิ";
    }, 1500);
    setTimeout( function () {
        document.getElementById('touchscreen').onclick = function () { itsheart()};
    }, 2500);
}

function itsheart() {
    document.getElementById('text').innerHTML = "";
    document.getElementById('bg').style.backgroundImage="url(itsheart.gif)";
}

