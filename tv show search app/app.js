const form = document.querySelector("#searchForm");
const image = document.querySelector("#img");
const insertedImage = document.querySelector("#insertedImage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  insertedImage.textContent = "";
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const searchResults = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    config
  );
  // const showImage = searchResults.data[0].show.image.medium;
  makeImages(searchResults.data);
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      insertedImage.append(img);
      img.classList.add("mx-2", "my-2");
    }
  }
};
