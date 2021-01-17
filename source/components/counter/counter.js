var i = 0;

function add() {
    var n = Number($(".counter__input").val());
    i += n;
    $(".counter__number").html(i);
};

function sub() {
    var n = Number($(".counter__input").val());
    i -= n;
    $(".counter__number").html(i);
};

function reset() {
    i=0;
    $(".counter__number").html(i);
    $(".counter__input").val(i+1);
};