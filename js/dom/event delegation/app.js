const tweetForm = document.querySelector("#tweet");
const tweets = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(nameInput.value, tweetInput.value);
  nameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (nameInput, tweetInput) => {
  const newTweet = document.createElement("li");
  const nameTag = document.createElement("b");
  nameTag.append(nameInput);
  newTweet.append(nameTag);
  newTweet.append(` - ${tweetInput}`);
  tweets.append(newTweet);
};

tweets.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove();
});
