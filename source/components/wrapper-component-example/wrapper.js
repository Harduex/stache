//Check for node env
if ((typeof process !== 'undefined') && (typeof process.versions.node !== 'undefined')) {
    console.log('code run by server');
  
    //Wrapper component
    module.exports = (options) => {
        const children = options.fn(this);
        const { className, id } = options.hash;

        return (
            `<div class="${className}" id="${id}"> 
                ${children}
            </div>`
        );
    }

  } else {
    console.log('code run by browser');
  }