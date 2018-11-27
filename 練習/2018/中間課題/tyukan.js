let tweetsHTML = "<ul>";
let appendTweet=  function (tweets) {
  tweetsHTML +=`<li><img src="${tweets.avatar}" height="100" width="100"> <b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt} </i></il>`
};

tweets.forEach(appendTweet);
tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;


function zenbu() {
  let zenbuHTML = "<ul>";

  let zenbutweet = function(tweets){
    zenbuHTML += `<li><img src="${tweets.avatar}" height="100" width="100"> <b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt} </i></il>`
  }
  tweets.forEach(zenbutweet);

  zenbuHTML += "</ul>"
  document.querySelector("#answer").innerHTML = zenbuHTML;
}


function saburou() {
  let saburouHTML = "<ul>";

  let saburoutweet = function (tweets) {
    saburouHTML += `<li><img src="${tweets.avatar}" height="100" width="100"><b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt} </i> </li>`
  }
  tweets.forEach(saburoutweet);

  saburouHTML +="</ul>"
  document.querySelector("#answer").innerHTML = saburouHTML;
}

function zirou() {
  let zirouHTML = "<ul>";

  let ziroutweet = function (tweets) {
    zirouHTML += `<li><img src="${tweets.avatar}" height="100" width="100"><b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt}</i> </li>`
  }
  tweets.forEach(ziroutweet);

  zirouHTML +="</ul>"
  document.querySelector("#answer").innerHTML = zirouHTML;
}

function tarou() {
  let tarouHTML = "<ul>";

  let taroutweet = function (tweets) {
    tarouHTML += `<li><img src="${tweets.avatar}" height="100" width="100">  <b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt} </i> </li>`
  }
  tweets.forEach(taroutweet);

  tarouHTML +="</ul>"
  document.querySelector("#answer").innerHTML = tarouHTML;
}

