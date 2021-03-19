//Check for node environment
if (typeof module === "object" && typeof module.exports === "object") {
    console.log('code run by server');

    //Wrapper component
    module.exports = function (options) {
        const children = options.fn(this);
        const { classes, id } = options.hash;

        return (
            `<div class="${classes}" id="${id}"> 
                ${children}
            </div>`
        );
    }

} else {
    console.log('code run by browser');
}