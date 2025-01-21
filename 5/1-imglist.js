//img
(function () {
  const baseUrl = `../img/5/TomoKano Kaa-chan~ Daisuki na Ore no Hahaoya wa Aho na Shinyuu no Kanojo~/1/`;
  const imgList = [];
  for (let i = 1; i <= 86; i++) {
    imgList.push(`${baseUrl}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
