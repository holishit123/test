//img
(function () {
  const baseUrl = `../img/24/Boku Igai Inpo no Sekai Tannin Kyoushi Hen/1/`;
  const imgList = [];
  for (let i = 1; i <= 41; i++) {
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
