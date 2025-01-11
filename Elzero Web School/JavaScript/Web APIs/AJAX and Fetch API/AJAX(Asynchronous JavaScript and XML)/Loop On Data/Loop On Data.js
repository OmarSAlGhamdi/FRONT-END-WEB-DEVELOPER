/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

if (request.method === "OPTIONS") {
  response = response
    .set("Access-Control-Allow-Origin", "*")
    .set("Access-Control-Allow-Methods", "GET, POST, PUT");
}

let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/OmarSAlGhamdi/repos");
myRequest.open("GET", "test.js");
myRequest.send();
console.log(myRequest);

// console.log(myRequest.status);
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

// var cors = require('cors');
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
