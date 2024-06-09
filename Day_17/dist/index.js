function hello(callback) {
    callback('Muhammad javed');
}
let arrowFunc = (name) => {
    console.log(`hello ${name}!,what are you doing today.`);
};
hello(arrowFunc);
export {};
