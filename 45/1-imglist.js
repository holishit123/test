//img
(function () {
  const baseUrl = `../img/45/Hamerareta Bakunyuu Hokage Tsuma/`;
  const imgList = [];
  for (let i = 1; i <= 34; i++) {
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
