document
  .getElementById("getRandomCat")
  .addEventListener("click", showRandomCat);
document
  .getElementById("getRandomMeme")
  .addEventListener("click", showRandomMeme);
document
  .getElementById("getRandomNaturePic")
  .addEventListener("click", getRandomNaturePic);
document
  .getElementById("makeMeFeelMotivated")
  .addEventListener("click", makeMeFeelMotivated);
document
  .getElementById("DOG")
  .addEventListener("click", DOG);

function showRandomCat() {
    fetch('https://meme-api.herokuapp.com/gimme/cats')
    .then(response => response.json())
    .then(data => {
        document.getElementById(
            "showData"
          ).innerHTML = `<p>${data.title}</p><img src="${data.url}"/>`;
    });
}

function showRandomMeme() {
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(response => response.json())
    .then(data => {
        document.getElementById(
            "showData"
          ).innerHTML = `<p>${data.title}</p><img src="${data.url}"/>`;
    });
}


function getRandomNaturePic(){

    fetch('https://meme-api.herokuapp.com/gimme/natureislit')
    .then(response => response.json())
    .then(data => {
        document.getElementById(
            "showData"
          ).innerHTML = `<p>${data.title}</p><img src="${data.url}"/>`;
    });
}

function makeMeFeelMotivated(){

    fetch('https://meme-api.herokuapp.com/gimme/motivation')
    .then(response => response.json())
    .then(data => {
        document.getElementById(
            "showData"
          ).innerHTML = `<img src="${data.url}"/>`;
    });
}

function DOG(){

    fetch('https://meme-api.herokuapp.com/gimme/DOG')
    .then(response => response.json())
    .then(data => {
        document.getElementById(
            "showData"
          ).innerHTML = `<p>${data.title}</p><img src="${data.url}"/>`;
    });
}