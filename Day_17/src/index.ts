

function hello(callback:any){
    callback('Muhammad javed');
}
let arrowFunc= (name:string) => {
    console.log(`hello ${name}!,what are you doing today.`)
    
}

hello(arrowFunc)