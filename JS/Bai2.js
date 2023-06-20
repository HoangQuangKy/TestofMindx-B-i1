let resultEle = document.getElementById("result");
let submitEle = document.getElementById("submit");
let outPut = "";
function numberOneTriangle(){
    event.preventDefault();
    let n = document.getElementById("input").value
    if (n<1 || n>10) {
        resultEle.innerText = "Hãy nhập 1 số trong khoảng tử 1-10"
    } else {
        for (let i = 1; i <= n; i++) {
            let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*"
        }
            outPut += row + "<br>";
        }
        resultEle.innerHTML = outPut;
    }
}
submitEle.addEventListener("click",numberOneTriangle);