//img
(function () {
  const baseUrl = `../img/12/Gibo no Hisokana Kojin Mendan Yor Forger/`;
  const imgList = [];
  for (let i = 1; i <= 38; i++) {
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
