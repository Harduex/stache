var i = 0;
function add() {
    var n = Number(document.getElementsByClassName("counter__input")[0].value);
    i += n;
    document.getElementsByClassName("counter__number")[0].innerHTML = i;
    console.log(n);

};

function sub() {
    var n = Number(document.getElementsByClassName("counter__input")[0].value);

    i -= n;
    document.getElementsByClassName("counter__number")[0].innerHTML = i;
};