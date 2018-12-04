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
            <th scope="col">${row[4]}</th>
            <th scope="col">${row[1]}</th>
            <th scope="col">${row[2]}</th>
            <th scope="col">${row[3]}</th>
          </tr>`;
          }
      );

      html +="</ul>"
      ;document.querySelector("#result").innerHTML =html;
    }

)