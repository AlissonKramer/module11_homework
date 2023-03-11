function fun1(a) {
    return function(b){
        return a+b}
}

console.log(fun1(1)(10))