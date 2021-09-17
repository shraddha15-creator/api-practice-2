fetch("https://api.funtranslations.com/translate/prate.json")
.then((res)=>{
  if(res.status === 404){
    throw Error(`${res.status} - Page not found`);
  }else if(res.status === 401){
    throw Error(`${res.status}- User not logged in`);
  }else{
    return res.json();
  }
})
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  document.querySelector("#output").innerText = err
});