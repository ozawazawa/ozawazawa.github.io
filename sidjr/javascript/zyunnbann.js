fetch("https://sheets.googleapis.com/v4/spreadsheets/1tdulfG7Vu0W2eADB_En5dlq1PTts1a9AMbh9XxviYNo/values/出欠確認?key=AIzaSyB5AJs2hAiY6tjNxyH8m6H69eR0S50Fb5g").then(
    response => {
      return response.json();
    }
).then(
    json => {
      console.log(json);
      let syussekiHTML = "<ul>";

      json.values.forEach(row => {
            function syusseki() {
              let syussekiHTML = "<ul>";
              let syusseki = function (row) {
                if (row[2] == "出席") {
                  syussekiHTML += `<li>${row[1]}<b>${row[2]}</b> ${row[3]} <i>${row[4]} </i> </li>`
                }
              }
              tweets.forEach(syusseki);
            }
          }
      );

      syussekiHTML +="</ul>"
      ;document.querySelector("#result").innerHTML =syussekiHTML;
    }
);


function syusseki() {
  let syussekiHTML = "<ul>";
  let syusseki = function (row) {
    if (row[2] == "出席") {
      syussekiHTML += `<li>${row[1]}<b>${row[2]}</b> ${row[3]} <i>${row[4]} </i> </li>`
      console.log(syussekiHTML);}
  }
  row[2].forEach(syusseki);

  syussekiHTML +="</ul>"
  ;document.querySelector("#result").innerHTML =syussekiHTML;
}
