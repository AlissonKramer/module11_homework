function perebor(a, b) {
    let timerId = setInterval(function() {
      console.log(a);
      if (a == b) {
        clearInterval(timerId);
      }
      a++;
    }, 1000);
  }
  
  perebor(-5, 7);