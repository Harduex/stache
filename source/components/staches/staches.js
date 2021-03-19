module.exports = function (options) {
    var staches = `
    <div class="staches">
        <img class="stache__img--left" src="images/stache-logo-left.png" alt="{">
        <p class="${options.hash.class}">${options.fn(this)}</p>
        <img class="stache__img--right" src="images/stache-logo-right.png" alt="}">
    </div>
    `;
    return staches;
}