// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

const loadStarWarsPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (e) {
    console.log(e.message);
  }
};

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };

  try {
    const res = await axios.get("https://icanhazdadjoke.com", config);
    const joke = res.data.joke;
    console.log(joke);
    jokeText.append(joke);
  } catch (e) {
    console.error("Failed to fetch a dad joke:", e);
  }
};

const jokeButton = document.querySelector(".btn");
const jokeText = document.querySelector(".joke");

jokeButton.addEventListener("click", () => {
  jokeText.innerText = "";
  getDadJoke();
});
