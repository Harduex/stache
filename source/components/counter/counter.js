// * Counter component logic
const Counter = (function (global) {
    let i = 0;
    const input = ".counter__input";
    const number = ".counter__number";

    return (actions) => {

        // * Setup function that runs by default on Counter component function invoking
        function load () {
            // * Some function calls
            handleInputChange();
            console.log("Counter Loaded");
        }

        // * Actions
        const add = () => {
            var n = Number($(input).val());
            i += n;
            $(number).html(i);
        };

        const sub = () => {
            var n = Number($(input).val());
            i -= n;
            $(number).html(i);
        };

        const reset = () => {
            i = 0;
            $(number).html(i);
            $(input).val(i + 1);
        };

        // * Event listeners
        function handleInputChange() {
            $(input).on('change paste keyup', function () {
                var value = $(this).val();
                $(this).val(value.replace(/[^\d.-]/g, ''));
            })
        }

        // * Calling specific action
        switch (actions) {
            case 'add':
                return add();
            case 'sub':
                return sub();
            case 'reset':
                return reset();
            default:
                load();
        }
    };

}(window))

$(document).ready(function () {
    Counter();
});
