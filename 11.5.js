const kvadrat=(x,n)=>{
    let result = x;

    for (let i = 1; i < n; i++) {
      result *= x;
    }
    console.log(result)
}
  
kvadrat(5, 2);