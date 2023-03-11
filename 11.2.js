alert("введите что нибудь")
const result = prompt()
let a =0;
function prostoeChislo() {
    for (let i = 1; i <= result; i++) {
        if (result % i == 0) {
            a++;
        }
    }
    if (a==2) {
        alert("число простое")
    }else{alert("число не простое")}
}
prostoeChislo()