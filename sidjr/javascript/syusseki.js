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
              <th scope="col" style="width:20%">${row[4]}</th>
              <th scope="col" style="width:40%">${row[1]}</th>
              <th scope="col" style="width:10%">${row[2]}</th>
              <th scope="col" style="width:30%">${row[3]}</th>
            </tr>
          </thead>
        </table>`;
          }
      );
      html +="</ul>";
      document.querySelector("#result").innerHTML =html;
    }
)




