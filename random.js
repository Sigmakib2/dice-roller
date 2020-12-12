var para;
var rannum;
function clickevent() {
    rannum = Math.floor(Math.random() * 6) + 1;
    para = document.getElementById("demo");

    para.innerHTML = rannum;

    if (rannum == 1) {
        document.getElementById("myImg").src = "dice 1.svg";
    }
    if (rannum == 2) {
        document.getElementById("myImg").src = "dice 2.svg";
    }
    if (rannum == 3) {
        document.getElementById("myImg").src = "dice 3.svg";
    }
    if (rannum == 4) {
        document.getElementById("myImg").src = "dice 4.svg";
    }
    if (rannum == 5) {
        document.getElementById("myImg").src = "dice 5.svg";
    }
    if (rannum == 6) {
        document.getElementById("myImg").src = "dice 6.svg";
    }
}
