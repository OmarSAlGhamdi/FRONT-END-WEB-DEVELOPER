/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users//OmarSAlGhamdi/repos")
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));

/*   -------------------------------------------------------------------------------- */

// 🧪 Print the names of the each repostory: 🧪
/* getData("https://api.github.com/users/OmarSAlGhamdi/repos")
.then((result) => {
  result.forEach((repo) => {
    console.log(repo.name);
  });
  return result;
}); */

// https://api.github.com/users/OmarSAlGhamdi/repos

// 🧪 Print the names of the Specific repostories: 🧪
/* getData("https://api.github.com/users/OmarSAlGhamdi/repos")
  .then((result) => {
    result.slice(0, 2).forEach((repo, index) => {
      console.log(`Repository ${index + 1}: `, repo.name);
    });
  })
  .catch((error) => {
    console.error(error);
  }); */

// 💪 Try to print the name of the repository 💪:
/* getData("https://api.github.com/users/OmarSAlGhamdi/repos")
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((result) => console.log(result(0 - 2).name)); */
