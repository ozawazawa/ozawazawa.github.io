

function zenbu() {
  let zenbuHTML = "<ul>";

  let zenbutweet = function(tweets){
    zenbuHTML += `<li><b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt} ${tweets.avatar}</i></il>`
  }
  tweets.forEach(zenbutweet);

  zenbuHTML += "</ul>"
  document.querySelector("#answer").innerHTML = zenbuHTML;
}


function saburou() {
  let saburouHTML = "<ul>";

  let saburoutweet = function (tweets) {
    saburouHTML += `<li><b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt} ${tweets.avatar}</i> </li>`
  }
  tweets.forEach(saburoutweet);

  saburouHTML +="</ul>"
  document.querySelector("#answer").innerHTML = saburouHTML;
}

function zirou() {
  let zirouHTML = "<ul>";

  let ziroutweet = function (tweets) {
    zirouHTML += `<li><b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt} ${tweets.avatar}</i> </li>`
  }
  tweets.forEach(ziroutweet);

  zirouHTML +="</ul>"
  document.querySelector("#answer").innerHTML = zirouHTML;
}

function tarou() {
  let tarouHTML = "<ul>";

  let taroutweet = function (tweets) {
    tarouHTML += `<li><b>${tweets.name}</b> ${tweets.message} <i>${tweets.tweetedAt} <img src="${tweets.avatar} height="100" width="100"  ></i> </li>`
  }
  tweets.forEach(taroutweet);

  tarouHTML +="</ul>"
  document.querySelector("#answer").innerHTML = tarouHTML;
}

