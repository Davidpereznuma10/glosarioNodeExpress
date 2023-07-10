const another = ()=>{
    return new Promise((resolve, reject)=>{
        if (true){
            resolve ("yeii");
        }else{
            reject("nohhhhhhhhhhhhhh");
        }
    })
}

another()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() =>  console.log('finally'));