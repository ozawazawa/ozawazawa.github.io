// let fruitsHTML = "<ul>";
//
// fruitsNamesからliタグを作ってfruitsHTMLに
// += で追加していく
//
//// while版
// let i = 0;
// while(i < fruitNames.length){
//   fruitsHTML += `<li>${fruitNames[i]}</li>`;
//   i++;
// }
//
// for版
// for(let i = 0;i < fruitNames.length;i++){
//   fruitsHTML += `<li>${fruitNames[i]}</li>`;
// }

// array#forEAch()版
// let appendFruit = function(fruit){
//   fruitsHTML +=`<li>${fruit}</li>`;
// };
// fruitNames.forEach(appendFruit);
//
// fruitsHTML += "</ul>";
// document.querySelector("#answer").innerHTML = fruitsHTML;







//
let tweetsHTML = "<ul>";
//
// let i = 0;
// while(i < tweets.length){
//   tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//   i++;
// }
//
// // for(let i = 0; i < tweets.length;i++){
// //   tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
// // }
//

let appendTweet=  function (tweet) {
  tweetsHTML +=`<li><b>${tweet.name}</b> ${tweet.message} <i>${tweet.tweetedAt}</i></li>`
};
tweets.forEach(appendTweet);
tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;