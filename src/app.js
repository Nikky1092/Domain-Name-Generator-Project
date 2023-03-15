/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let newArray = [];
  for (let i = 0; i < pronoun.length; i++) {
    let pronounValue = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      let adjValue = adj[j];
      for (let k = 0; k < noun.length; k++) {
        let nounValue = noun[k];
        let domain = pronounValue + adjValue + nounValue + ".com";
        newArray.push(domain);
      }
    }
  }
  function getList(newArray, separator) {
    var text = newArray.join(separator);
    document.getElementById("name").innerHTML = text;
  }
  var separator = "<br>";
  getList(newArray, separator);
};
