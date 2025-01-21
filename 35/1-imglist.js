//img
(function () {
  const baseUrl = `../img/35/The Housewife of the Summer Festival/`;
  const imgList = [];
  for (let i = 1; i <= 10; i++) {
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
