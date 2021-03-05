//Encapsulating variables to be reachable only on this component
const Counter = (function (global) {
    var i = 0;
    var input = ".counter__input";
    var number = ".counter__number";

    return function (actions) {

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

        //Event listeners
        function handleInput() {
            $(input).on('change paste keyup', function () {
                var value = $(this).val();
                $(this).val(value.replace(/[^\d.-]/g, ''));
            })
        }

        function loaded() {
            console.log("Counter Loaded");
        }

        switch (actions) {
            case 'add':
                return add();
            case 'sub':
                return sub();
            case 'reset':
                return reset();
            default:
                loaded();
                handleInput();
        }
    };

}(window))

$(document).ready(function () {
    Counter();
});
