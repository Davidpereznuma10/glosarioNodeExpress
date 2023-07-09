const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('asynC!!'),2000)
        : reject(new Error('Error!'))
    })
}

const anotherFn=async ()=>{
    const sometime = await fnAsync();

    console.log(sometime);
    console.log("hello!");
}

console.log('before');
anotherFn();
console.log('after');