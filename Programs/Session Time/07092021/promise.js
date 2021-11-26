function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * Math.floor(3));
            if (num % 2 == 0) {
                resolve('download success');
            }
            else {
                reject('download failed')
            }
        }, 10000)
    });
}


ret.then((value) => {
    console.log("resolved promise: ", value);
}, (value) => {
    console.log("resolved promise: ", value);
}
)
    .catch((error) => {
        console.log('exception in promise: ', value);
    });;

ret.then((value) => {
    console.log("resolved promise: ", value);
}),
    .catch((value) => {
    console.log('exception in promise: ', value);
});