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
  .forEach(syusseki);

  syussekiHTML +="</ul>"
  ;document.querySelector("#result").innerHTML =syussekiHTML;
}

function syusseki() {
  fetch("https://sheets.googleapis.com/v4/spreadsheets/1tdulfG7Vu0W2eADB_En5dlq1PTts1a9AMbh9XxviYNo/values/出欠確認?key=AIzaSyB5AJs2hAiY6tjNxyH8m6H69eR0S50Fb5g").then(
      response => {
        return response.json();
      }
  ).then(
      json => {
        console.log(json);
        let html = "<ul>";
        json.values.forEach(row => {
              html += `<hr width="100%" >
        <table class="table table-bordered">
          <thead>
             <tr>
              <th scope="col" style="width:20%">日程</th>
              <th scope="col" style="width:40%">名前</th>
              <th scope="col" style="width:10%">出欠</th>
            　<th scope="col" style="width:20%">到着予想時刻</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${row[4]}</td>
              <td>${row[1]}</td>
              <td>"出席"==${row[2]}</td>
              <td>${row[3]}</td>
            </tr>
          </tbody>
        </table>`;
            }
        );
        html += "</ul>";
        document.querySelector("#result").innerHTML = html;
      }
  )
}



