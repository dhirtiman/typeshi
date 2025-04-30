function delay(callback: () => void) {
    setTimeout(callback,1000);
}


function hello() {
    console.log("hello");
}

delay(hello);


