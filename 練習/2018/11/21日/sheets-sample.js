fetch("https://sheets.googleapis.com/v4/spreadsheets/1tdulfG7Vu0W2eADB_En5dlq1PTts1a9AMbh9XxviYNo/values/出欠確認?key=AIzaSyB5AJs2hAiY6tjNxyH8m6H69eR0S50Fb5g").then(
    response => {
      return response.json();
    }
).then(
    json => {
      console.log(json);
      let html = "<ul>";

      json.values.forEach(row => {
      html += `<li>${row[0]},${row[1]},${row[2]},${row[3]}</li>`;
      }
      );

      html +="</ul>"
      ;document.querySelector("#result").innerHTML =html;
    }

)