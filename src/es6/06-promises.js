const another = ()=>{
    return new Promise((resolve, reject)=>{
        if (false){
            resolve ("yeii");
        }else{
            reject("nohhhhhhhhhhhhhh");
        }
    })
}

another()
    .then(response => console.log(response))
    .catch(err => console.log(err));