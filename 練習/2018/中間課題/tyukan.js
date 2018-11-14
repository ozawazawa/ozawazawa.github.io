let tweetsHTML = "<ul>";

let apeendtweet = function(tweet){
  tweetsHTML += `<li><b>${tweet.name}</b> ${tweet.message} <i>${tweet.tweetedAt} ${tweet.avatar}</i></il>`
}
tweets.forEach(apeendtweet);

tweetsHTML += "</ul>"
document.querySelector("#answer").innerHTML = tweetsHTML;


