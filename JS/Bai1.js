let submitEle = document.getElementById("total");
let displayTotalEle = document.getElementById("result");
let sum = 0;

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
if(num1 > num2 ) {
    alert("Vui lòng nhập lại số a phải nhỏ hơn b");
    displayTotalEle.innerText = "Vui lòng nhập lại số a phải nhỏ hơn b"
}else {
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
          sum += i;
        }
      }
      
      displayTotalEle.innerText = "Tổng các số nguyên tố: " + sum;
}
}

submitEle.addEventListener("click", calculate);
