function doCheckAnswers() {
  let answer= document.querySelector("#answer");
  let text = document.querySelector("#input_string");
  let list = Array.from(document.querySelector("answer-list")).forEach(function (element){console.log(element)} );

  if(text== list){
    answer.innerHTML("正解");
  }else {
    answer.innerHTML("不正解");
  }
answer.innerHTML("aa");




}