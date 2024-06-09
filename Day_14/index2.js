function myCallBack(text) {
    console.log("inside myCallback " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
let sync = callingFunction("myText", myCallBack);
console.log(sync);
export {};
