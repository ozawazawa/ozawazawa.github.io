function showModal() {
 document.querySelector("#modal").innerHTML ="押された！！"
}

function changeRed() {
  document.querySelector("#modal").style.background="Red";

}

function changeYellow() {
  document.querySelector("#modal").style.background="Yellow";

}

function changeGreen() {
  document.querySelector("#modal").style.background="Green";

}function appendCircle() {
  document.querySelector("#modal").append("〇");

}

function appendCross() {
  document.querySelector("#modal").append("✕")

}

function plusOne() {
  document.querysSelector("#modal").innerHTML =
    Number(document.queryselector("#modal").innerHTML) + 1;
}

