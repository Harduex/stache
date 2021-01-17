var i = 0;
var input = ".counter__input";
var number = ".counter__number";

function handleInput() {
    $(input).on('change paste keyup', function () {
        var value = $(this).val();
        $(this).val(value.replace(/[^\d.-]/g, ''));
    })
}

function add() {
    var n = Number($(input).val());
    i += n;
    $(number).html(i);
};

function sub() {
    var n = Number($(input).val());
    i -= n;
    $(number).html(i);
};

function reset() {
    i = 0;
    $(number).html(i);
    $(input).val(i + 1);
};

$(document).ready(function () {
    handleInput();
});