alert("введите что нибудь")
const result = +prompt()
function getResult() {
    if (result % 2 == 0) {
      console.log('Число четное')
  }else if (result % 2 == 1) {
  console.log('число нечетное')}
  else if(result == 0){
    console.log("это ноль")
  }
  else if(result % 2 !== 0||1){
    console.log("упс, вы ошиблись")
  }
}
getResult();