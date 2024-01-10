const fakeRequest = (url,success,failure)=>{
    const delay = Math.floor(Math.random()*4500)+500;

    setTimeout(()=>{
        if(delay>4000){
            success('connection TimeOut');
        }else{
            failure('Data fetched')
        }
    },delay)
}


fakeRequest('/fakeUrl',(str)=>{
    console.log(str)
}, (str)=>{
    console.log(str)
})