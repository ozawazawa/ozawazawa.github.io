// fetch("http://morimorihoge.github.io/teu2018f/tweets.json").then(
//     //fetch()でとれるのはResponseオブジェクトなので、そこからJSONデータを取り出してreturnする
//     function (response) {
//       return response.json();
//     }
// ).then(
//     //このthen()に渡す関数では、引数にオブジェクト化されたJSONデータが入っているので、直接操作できる
//     function (json) {
//       let answerHtml ="";
//       json.forEach(function (tweet) {
//         answerHtml +=`<li>${tweet.name}</li>`;
//       });
//       document.querySelector("#answer").innerHTML =answerHtml;
//     }
// );

function searchAddrsee() {
  let zip = document.querySelector("#zip").value;
  console.log(zip);
  return false;
}
  fetch(`http://zipcloud.ibsnet.co.jp/api/search?zipcode=1670023=${zip}`).then(
      response => {
        return response.json();
      }
  ).then(
      json => {
        console.log(json);
        let answer = document.querySelector("#answer");
        answer.innerHTML += `<li>
            ${json.results[0].address1}
            ${json.results[0].address2}
            ${json.results[0].address3}
            </li>`;
      }
  );

