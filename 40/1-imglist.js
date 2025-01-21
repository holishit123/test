//img
(function () {
  const baseUrl = `../img/40/Shoutengai no Ana Zuma-tachi/1/`;
  const imgList = [];
  for (let i = 1; i <= 53; i++) {
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
