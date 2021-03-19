if ((typeof process !== 'undefined') && (typeof process.versions.node !== 'undefined')) {

    module.exports = (options) => {
        const children = options.fn(this);
        const { className } = options.hash;

        return (
            `<div class="staches">
                <img class="stache__img--left" src="images/stache-logo-left.png" alt="{">
                    <p class="${className}">
                        ${children}
                    </p>
                <img class="stache__img--right" src="images/stache-logo-right.png" alt="}">
            </div>`
        );
    }

}
