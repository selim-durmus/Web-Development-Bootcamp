// "https://swapi.dev/api/people/1";

const request = new XMLHttpRequest();

request.onload = function () {
  console.log("it loaded!");
  const data = JSON.parse(this.responseText);
  console.log(data.name);
};

request.onerror = function () {
  console.log("Error!!");
  console.log(this);
};
request.open("GET", "https://swapi.dev/api/people/1");

request.send();
