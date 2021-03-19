if (typeof module === "object" && typeof module.exports === "object") {

    module.exports = function (options, context) {
        const children = options.fn(this);
        const { classes } = options.hash;

        return (
            `<div class="staches">
                <img class="stache__img--left" src="images/stache-logo-left.png" alt="{">
                    <p class="${classes}">
                        ${children}
                    </p>
                <img class="stache__img--right" src="images/stache-logo-right.png" alt="}">
            </div>`
        );
    }

}