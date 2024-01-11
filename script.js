// let data = {Name : "Chirag", Age : 19}

// console.table(data);

// console.log(1);

// setTimeout()

const myPromise = new Promise((resolve, reject) => {
    const flag = false;
    if(flag){
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 3000)
    }
    else{
        reject();
    }
})

console.log(1);

myPromise.then(() => {
    console.log(3);
})

.catch(() => {
    console.log("This is an error");
})