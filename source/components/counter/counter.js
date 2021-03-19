// * Counter component logic
const Counter = (function (global) {
    const inputElement = ".counter__input";
    const numberElement = ".counter__number";

    let value = 0;
    let number = Number($(inputElement).val() ?? 0);


    return (actions) => {

        // * Setup function that runs by default on Counter component function invoking
        function load() {
            // * Some function calls
            handleInputChange();
            console.log("Counter Loaded");
        }

        // * Actions
        function add() {
            value += number;
            $(numberElement).html(value);
        };

        function sub() {
            value -= number;
            $(numberElement).html(value);
        };

        function reset() {
            value = 0;
            $(numberElement).html(value);
            $(inputElement).val(value + 1);
        };

        // * Event listeners
        function handleInputChange() {
            $(inputElement).on('change paste keyup', function () {
                var value = $(this).val();
                number = Number($(this).val());
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

Counter();

