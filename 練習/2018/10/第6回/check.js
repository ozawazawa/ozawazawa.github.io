function checkNumber() {
  if(Number(document.querySelector('#num').value) >10){
    window.alert("true");
  }else{
    window.alert("false")
  }
}

function checkUserInput() {
  if(document.querySelector("#user_input").value==="隣の客はよく柿食う客だ"){
    document.querySelector("#answer").innerHTML="〇";
  }else{
    document.querySelector("#answer").innerHTML="✕";
  }

}

function checkAge() {
  let age =document.querySelector("#age");
  let answer=document.querySelector("#answer");

  if(age.value <=0 ){
    answer.innerHTML="エラー";
  }else if(age.value<20){
    answer.innerHTML="未成年";
  }else if(age.value<65){
    answer.innerHTML="成人";
  }else{
    answer.innerHTML="高齢者";
  }

}

function checkYear() {
  let year=document.querySelector("#year");
  let answer=document.querySelector("#answer");

  if(year.value%400===0 ){
    answer.innerHTML="閏年";
  }else　if(year.value%100===0 ){
    answer.innerHTML="平年";
  }else if(year.value%4===0){
    answer.innerHTML="閏年";
  }else {
    answer.innerHTML="平年"
  }

}