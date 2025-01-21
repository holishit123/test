//img
(function () {
  const baseUrl = `../img/47/Musuko no Somatsuna Mono de Manzoku Shite ita Kyonyuu Haha o Okashite Mezame Saseru/`;
  const imgList = [];
  for (let i = 1; i <= 32; i++) {
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
