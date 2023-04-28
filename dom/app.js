const allImages = document.getElementsByTagName("img");

function changeImagesToPartridge() {
  for (let each of allImages) {
    each.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
  }
}

document.getElementsByClassName("square");

const squareImages = document.getElementsByClassName("square");

function changeSquareImagesToPartridge() {
  for (let img of squareImages) {
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
  }
}

const links = document.querySelectorAll("p a");

function selectLinks() {
  for (let link of links) {
    console.log(link.href);
  }
}
